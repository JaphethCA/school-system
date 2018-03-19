import { User } from '../models';
import { signToken } from '../utilities/token';

export const login = (request, response) => {
  User.findOne(
    {
      where: {
        email: request.body.email
      }
    })
      .then(user => {
        if (!user) {
          return response.status(404).json({
            message: 'User does not exist',
            status: 'failed'
          })
        }
        const token = signToken({ id: user.id }, "1h")
        response.status(200).json({
          message: 'Login Successfull',
          status: 'success',
          token
        })
      })
      .catch(() => {
        response.status(500).json({
          message: 'server Error',
          status: 'failed'
        })
      });
};