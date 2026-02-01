import express from 'express';
import { login, register } from '../modules/auth/controllers/authController.js';

const router = express.Router();
console.log(register, login)
router.post('/register', register);
router.post('/login', login);

export default router;