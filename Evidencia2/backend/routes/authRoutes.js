const express = require('express');
const { login, validateSession } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/validateSession', authMiddleware, validateSession);

module.exports = router;