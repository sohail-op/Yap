import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

import User from "../model/userModel.js";

dotenv.config();

const validateToken = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - No Token provided" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });
  }

  const user = await User.findById(decoded.userid).select("-password");

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }
  req.user = user;
  next();
});

export default validateToken;
