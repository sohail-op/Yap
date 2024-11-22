import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import { app, server } from "./socket/socket.js";

import connectDb from "./config/connectDb.js";

dotenv.config();
connectDb();
// const app = express();
const port = process.env.PORT || 5001;

// enable cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`Server is Live on http://localhost:${port}`);
});
