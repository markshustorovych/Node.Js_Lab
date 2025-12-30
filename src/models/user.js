import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  cart: [CartItemSchema],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
