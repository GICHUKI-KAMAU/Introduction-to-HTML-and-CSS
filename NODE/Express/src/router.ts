import express from 'express';
import {
  registerUser,
  loginUser,
  getUserProfile,
} from './controllers/userController';
import {
  validateRegister,
  validateLogin,
} from './validators/userValidator';
import { authMiddleware } from './middlewares/authMiddleware';

const router = express.Router();

router.post('/register', validateRegister, registerUser);
router.post('/login', validateLogin, loginUser);
router.get('/profile', authMiddleware, getUserProfile);

export default router;
