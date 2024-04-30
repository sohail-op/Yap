import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateToken = (req, res, next) => {
  let token = req.cookie.jwt;

  if (!token) {
    res.status(401).json({ message: "Unathorized - No Token provided" });
  }
  const verify = jwd.verify(token, process.env.JWT_SECRET);

  if (!verify) {
    res.status(401).json({ message: "Unathorized - Invalid Token" });
  }
  //unfinished : resume from here
};
