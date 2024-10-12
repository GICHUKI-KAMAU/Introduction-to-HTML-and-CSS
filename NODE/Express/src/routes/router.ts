// router.ts
import express from 'express';
import {
  registerUser,
  updateUser,
  getUser,
  deleteUser,
  patchUser,
  getAllUsers,
} from '../controllers/userController';

const router = express.Router();

router.post('/register', registerUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id', patchUser);
router.get('/users', getAllUsers);

export default router;
