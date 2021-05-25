import { Router } from 'express';
import PostController from '../../controllers/PostController';
import jwtAuth from '../../services/users/auth';

const postRoutes = Router();
const postController = new PostController();
postRoutes.use(jwtAuth);
postRoutes.post('/', postController.newPost);
postRoutes.get('/', postController.getAll);
postRoutes.get('/:id', postController.getById);
postRoutes.put('/:id', postController.update);
postRoutes.delete('/:id', postController.delete);

export default postRoutes;