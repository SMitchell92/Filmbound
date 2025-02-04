import apiroutes from './api/index.js';
import { Router } from 'express';

const router = Router();

router.use('/api', apiroutes);



export default router;