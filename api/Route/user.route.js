import express from 'express';
import {test} from '../UserController/user.controller.js';
const router = express.Router();

router.get('/test', test)


export default router;