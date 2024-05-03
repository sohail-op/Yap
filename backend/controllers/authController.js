import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

import User from "../model/userModel.js";
import { gentoken } from "../util/gentoken.js";

//@des Sign-up a user
//@route POST /api/auth/signup
//@access Public
export const signup = asyncHandler(async (req, res) => {
  const { fullName, userName, gender, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    res.status(400).json({ error: "Password do not match" });
  }

  const user = await User.findOne({ userName });
  if (user) {
    res.status(400).json({ error: "User already exist" });
  }

  // if(!fullName || !userName || !gender){
  //   res.status(400).json({error: "Please enter all fields"})
  // }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const boypfp = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
  const girlpfp = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

  const newUser = await User.create({
    fullName,
    userName,
    password: hashedPassword,
    gender,
    profile: gender === "Male" ? boypfp : girlpfp,
  });

  if (newUser) {
    gentoken(newUser._id, res);

    res.status(201).json({
      fullName: newUser.fullName,
      userName: newUser.userName,
      profile: newUser.profile,
    });
  } else {
    res.status(400).json({ error: "Invalid user data" });
  }
});

//@des Login a user
//@route POST /api/auth/login
//@access Public
export const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!password || !userName) {
    res.status(400).json({ error: "Please enter both fields" });
  }

  const user = await User.findOne({ userName });

  // if(!user){
  //   res.status(400).json({messageerror "User not Found"})
  // }

  if (user && (await bcrypt.compare(password, user?.password || ""))) {
    gentoken(user._id, res);

    res.status(200).json({
      userName: user.userName,
      fullName: user.fullName,
      profile: user.profile,
    });
  } else {
    res.status(401).json({ error: "Invalid credential" });
  }
});

//@des Logout a user
//@route POST /api/auth/logout
//@access Public
export const logout = asyncHandler((req, res) => {
  res.cookie("jwt: ", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out successfully" });
});
