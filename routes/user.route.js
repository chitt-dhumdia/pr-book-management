import express from 'express'
import User from '../models/user.model.js';
import {registerUser,loginUser }from "../controllers/user.controller.js"
import { validateUser } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post("/register",validateUser,registerUser);
router.post("/login",loginUser);

export default router;
