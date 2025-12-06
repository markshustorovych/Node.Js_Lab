import { signToken } from '@/lib/auth';
import jwt from 'jsonwebtoken';

process.env.JWT_SECRET = 'test-secret-key';

jest.mock('jsonwebtoken');

describe('Auth Module (Unit)', () => {
  it('signToken повинен створювати токен', () => {
    const payload = { id: '123', email: 'test@test.com' };

    signToken(payload);

    expect(jwt.sign).toHaveBeenCalledWith(
      payload,
      expect.any(String),
      expect.objectContaining({ expiresIn: '7d' })
    );
  });
});
