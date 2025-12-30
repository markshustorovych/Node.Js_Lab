import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import { getUserFromRequest } from '@/lib/auth';
import { client } from "@/sanity/client.js";

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const userData = getUserFromRequest(req);
  if (!userData) return res.status(401).json({ error: 'Not authenticated' });

  await dbConnect();

  const user = await User.findById(userData.id).select('cart');
  if (!user) return res.status(404).json({ error: 'User not found' });

  const cartItems = user.cart;

  if (cartItems.length === 0) {
    return res.status(200).json({ cart: [] });
  }

  const productIds = cartItems.map(item => item.productId);
  const query = `*[_type == "product" && _id in $ids]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url
  }`;

  const sanityProducts = await client.fetch(query, { ids: productIds });

  const cart = cartItems.map(item => {
    const product = sanityProducts.find(p => p._id === item.productId.toString());
    return {
      id: item.productId,
      quantity: item.quantity,
      name: product?.title || "Unknown",
      price: product?.price || 0,
      image: product?.imageUrl || null,
    };
  });

  res.status(200).json({ cart });
}
