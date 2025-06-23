import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

import User from "../model/userModel.js";

dotenv.config();

const validateToken = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ error: "Unathorized - No Token provided" });
  }

  const decoded = jwt.decode(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res.status(401).json({ error: "Unathorized - Invalid Token" });
  }
  const user = await User.findById(decoded.userid).select("-password");

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }
  req.user = user;
  next();
});

export default validateToken;
