import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signToken = (data, time) => {
  return jwt.sign(
    data,
    process.env.SECRET_KEY,
    {
      expiresIn: time
    }
  )
};