import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const gentoken = (userid, res) => {
  const token = jwt.sign(
    { userid },
    process.env.JWT_SECRET || "default_secret",
    {
      expiresIn: "7d",
    }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //in ms
    httpOnly: true,
    samesite: true,
  });
  return token;
};
