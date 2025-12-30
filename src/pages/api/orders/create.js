import dbConnect from '@/lib/mongoose';
import Order from '@/models/order';
import { getUserFromRequest } from '@/lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  await dbConnect();

  const userData = getUserFromRequest(req);
  if (!userData) return res.status(401).json({ message: 'Not authenticated' });

  const {
    items,
    totalPrice,
    fullName,
    address,
    city,
    postalCode,
    cardNumber,
  } = req.body;

  if (
    !items || !Array.isArray(items) || items.length === 0 ||
    typeof totalPrice === 'undefined' ||
    !fullName || !address || !city || !postalCode || !cardNumber
  ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const newOrder = new Order({
      userId: userData.id,
      items,
      totalPrice,
      fullName,
      address,
      city,
      postalCode,
      cardNumber,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order created successfully', orderId: newOrder._id });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
