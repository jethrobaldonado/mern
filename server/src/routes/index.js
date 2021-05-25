import { Router } from 'express';

const router = Router();

router.use('/api/v1', () => console.log('test'));

export default router;