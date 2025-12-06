import handler from '@/pages/api/cart/addItem';
import { createMocks } from 'node-mocks-http';

jest.mock('@/lib/mongoose', () => async () => Promise.resolve());

jest.mock('@/lib/auth', () => ({
  getUserFromRequest: () => ({ id: 'user_123' }),
}));

jest.mock('@/models/user', () => ({
  findById: jest.fn(() => ({
    _id: 'user_123',
    cart: [],
    save: jest.fn(),
  })),
}));

describe('/api/cart/addItem (Integration)', () => {
  it('повертає 200 OK при успішному додаванні', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        productId: 'console_1',
        quantity: 1,
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);

    const data = JSON.parse(res._getData());
    expect(data.message).toBe('Item added to cart');
  });

  it('повертає 400 Bad Request без ID товару', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { quantity: 1 },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
  });
});
