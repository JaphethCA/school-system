import { signToken } from '../utilities/token';
import { User } from '../models';

export const signup = (request, response) => {
  User.create({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password
  })
    .then(user => {
      const token = signToken({ id: user.id }, "86400s")
      return response.status(201).json({
        message: 'User successfully created',
        status: 'success',
        email: user.email,
        token
      });
    })
    .catch(() => response.status(500).json({
      message: 'Server Error',
      status: 'failed'
    }));
};

export const userExists = (request, response, next) => {
  User.findOne({
    where: {
      email: request.body.email
    }
  }).then((user) => {
    if (!user) {
      return next();
    }
    response.status(409).json({
      message: 'User with credentials already exist',
      status: 'failed'
    })
  });
};