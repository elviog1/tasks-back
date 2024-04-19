import express from "express";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  const { token } = req.cookies;
  res.cookie("token", token, {
    sameSite: "none",
    secure: true,
  });
  console.log(token);
  next();
});

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;

// 1:30:40
