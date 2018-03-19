import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const checkToken = (request, response, next) => {
  const token = request.query.token
    || request.body.token
    || request.headers.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return response.status(401).json({
        message: 'Provide a valid user token',
        status: 'failed'
      });
    }
    request.decoded = decoded;
    next();
  });
};