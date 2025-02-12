import { Router } from 'express';
import { userRouter } from './user-routes.js';
import favoritesRoutes from './favoritesRoutes.js';

const router = Router();

router.use('/favorites', favoritesRoutes);
router.use('/users', userRouter);

export default router;
