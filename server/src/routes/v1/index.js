import { Router } from 'express';
import userRoutes from './users';
import postRoutes from './posts';
const v1Router = Router();

v1Router.use('/v1/users', userRoutes);
v1Router.use('/v1/posts', postRoutes);

export default v1Router;