import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

import connectDb from "./config/connectDb.js";

dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is Live on http://localhost:${port}`);
});
