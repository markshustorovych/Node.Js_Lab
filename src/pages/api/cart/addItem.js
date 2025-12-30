import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import { getUserFromRequest } from '@/lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  const userData = getUserFromRequest(req);
  if (!userData) return res.status(401).json({ message: 'Not authenticated' });

  const { productId, quantity } = req.body;
  if (!productId || typeof quantity === 'undefined') {
    return res.status(400).json({ message: 'Missing productId or quantity' });
  }

  const user = await User.findById(userData.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const quantityNum = Number(quantity);
  if (isNaN(quantityNum) || quantityNum <= 0) {
    return res.status(400).json({ message: 'Quantity must be a positive number' });
  }

  const existingItemIndex = user.cart.findIndex(
    item => item.productId === productId
  );

  if (existingItemIndex !== -1) {
    user.cart[existingItemIndex].quantity += quantityNum;
  } else {
    user.cart.push({ productId, quantity: quantityNum });
  }

  await user.save();

  res.status(200).json({ message: 'Item added to cart' });
}
