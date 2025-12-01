import express from "express";
import { getUserById, getUserResumes, loginUser, registerUser } from "../controllers/UserController.js";
import protect from "../Middlewares/authMiddleware.js";

const userRouter = express.Router();

// Public routes
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// Protected routes
userRouter.get('/data', protect, getUserById);
userRouter.get('/resumes', protect, getUserResumes);

export default userRouter;