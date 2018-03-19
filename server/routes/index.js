import express from 'express';

import { login } from '../controllers/Login';
import { signup, userExists } from '../controllers/signup';
import { checkToken } from '../middlewares/auth';

const router = express.Router();

// root api
router.get('/', checkToken, (req, res) => {
  res.status(200).json({
    message: 'Welcome to the school info API'
  });
});

// User authentication routes
router.post('/login', login);
router.post('/signup', userExists, signup);

export default router;