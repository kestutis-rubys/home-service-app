import jwt from 'jsonwebtoken';

const expiresIn = '90d';

export const generateToken = (payload: any) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }
  return jwt.sign(payload, secret, { expiresIn });
};
