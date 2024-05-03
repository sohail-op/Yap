import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

import User from "../model/userModel.js";

const validateToken = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (!token) {
    res.status(401).json({ error: "Unathorized - No Token provided" });
  }

  const decoded = jwt.decode(token, process.env.JWT_SECRET);

  if (!decoded) {
    res.status(401).json({ error: "Unathorized - Invalid Token" });
  }
  const user = await User.findById(decoded.userid).select("-password");

  if (!user) {
    res.status(401).json({ error: "User not found" });
  }
  req.user = user;
  next();
});

export default validateToken;
