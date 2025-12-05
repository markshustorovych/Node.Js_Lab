import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import { getUserFromRequest } from '@/lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  const userData = getUserFromRequest(req);
  if (!userData) return res.status(401).json({ message: 'Not authenticated' });

  const user = await User.findById(userData.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.cart = [];

  await user.save();

  res.status(200).json({ message: 'Cart has been cleared' });
}
