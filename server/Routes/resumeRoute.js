import express from "express";
import { createResume, deleteResume, getPublicResumeById, getResumeByID, updateResume } from "../controllers/resumeController.js";
import upload from "../configs/multer.js";
import protect from "../Middlewares/authMiddleware.js";

const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);
resumeRouter.put('/update', protect, upload.single('image'), updateResume);
resumeRouter.delete('/delete/:resumeId', protect, deleteResume);
resumeRouter.get('/get/:resumeId', protect, getResumeByID);
resumeRouter.get('/public/:resumeId', getPublicResumeById);

export default resumeRouter;