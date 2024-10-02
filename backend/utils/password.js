import jwt from 'jsonwebtoken';

const expiresIn = '90d';

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

export default generateToken;
