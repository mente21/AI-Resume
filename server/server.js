import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDB from "./configs/db.js";
import userRouter from "./Routes/UserRoutes.js";
import resumeRouter from "./Routes/resumeRoute.js";
import aiRouter from "./Routes/aiRoutes.js";


const app = express()
const PORT = process.env.PORT || 3000

// db connection
// connectDB() - Removed top-level await to avoid race conditions

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({ message: "Database connection failed" });
    }
});

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send("Server is live..."))
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)





if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;