import express from 'express';
import { signup } from '../UserController/user.auth.controller.js';
import { signin } from '../UserController/user.auth.controller.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin',signin);

export default router;
