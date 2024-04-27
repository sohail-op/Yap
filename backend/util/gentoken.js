import jwt from "jsonwebtoken";

export const gentoken = (userid, res) => {
  const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  res.cookie("jwt: ", token, {
    maxAge: 15 * 60 * 1000, //ms
    httpOnly: true,
    samesite: true,
  });
};
