import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { authenticateToken, refreshAccessToken } from '../middleware/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', authenticateToken, refreshAccessToken);

export default router;