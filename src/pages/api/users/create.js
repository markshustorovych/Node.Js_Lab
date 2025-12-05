import dbConnect from '@/lib/mongoose';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/auth';
import * as cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await dbConnect();

    const { email, name, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      name,
      password: hashed,
      cart: [],
    });

    const token = signToken({ id: user._id, email: user.email });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        path: '/',
      })
    );

    return res.status(201).json({ _id: user._id, email, name });
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
