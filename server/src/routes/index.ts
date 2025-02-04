import apiroutes from './api/index.js';
import { Router } from 'express';
import authRoutes from './auth-routes.js';

const router = Router();
router.use('/auth', authRoutes);
router.use('/api', apiroutes);



export default router;