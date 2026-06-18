const express = require('express');
const {
  register,
  login,
  logout,
  refresh,
  getMe,
} = require('../controllers/authController');

const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/me', authenticateToken, getMe);

module.exports = router;