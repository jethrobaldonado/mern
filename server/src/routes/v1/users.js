import { Router } from 'express';
import UserController from '../../controllers/UserController';
import jwtAuth from '../../services/users/auth';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/login', userController.login);
userRoutes.post('/logout', userController.logout);
userRoutes.get('/me', jwtAuth, userController.me);
userRoutes.post('/register', userController.register);
export default userRoutes;