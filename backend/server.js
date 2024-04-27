import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectDb from "./config/connectDb.js";

dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is Live on http://localhost:${port}`);
});
