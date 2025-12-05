import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import { getUserFromRequest } from '@/lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  const userData = getUserFromRequest(req);
  if (!userData) return res.status(401).json({ message: 'Not authenticated' });

  const { productId } = req.body;
  if (!productId) return res.status(400).json({ message: 'Missing productId' });

  const user = await User.findById(userData.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const itemIndex = user.cart.findIndex(
    item => item.productId.toString() === productId.toString()
  );

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found in cart' });
  }

  if (user.cart[itemIndex].quantity > 1) {
    user.cart[itemIndex].quantity -= 1;
  } else {
    user.cart.splice(itemIndex, 1);
  }

  await user.save();

  res.status(200).json({ message: 'One item removed from cart' });
}
