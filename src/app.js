import express from "express";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js"
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())

app.use("/api",authRoutes);
app.use("/api",taskRoutes);

export default app;

// 1:30:40