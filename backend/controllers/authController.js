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
    return res.status(400).json({ error: "Password do not match" });
  }

  const user = await User.findOne({ userName });
  if (user) {
    return res.status(409).json({ error: "User already exist" });
  }

  // if(!fullName || !userName || !gender){
  //   res.status(400).json({error: "Please enter all fields"})
  // }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  // const boypfp = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
  // const girlpfp = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

  const rndmNum = Math.floor(Math.random() * 100);

  const boypfp = `https://randomuser.me/api/portraits/men/${rndmNum}.jpg`;
  const girlpfp = `https://randomuser.me/api/portraits/women/${rndmNum}.jpg`;

  const newUser = await User.create({
    fullName,
    userName,
    password: hashedPassword,
    gender,
    profilePic: gender === "Male" ? boypfp : girlpfp,
  });

  if (newUser) {
    gentoken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });
  } else {
    console.error("Error: Unable to create user");
    res.status(400).json({ error: "Invalid user data" });
  }
});

//@des Login a user
//@route POST /api/auth/login
//@access Public
export const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!password || !userName) {
    return res.status(400).json({ error: "Please enter both fields" });
  }

  const user = await User.findOne({ userName });

  // if(!user){
  //   res.status(400).json({messageerror "User not Found"})
  // }

  if (user && (await bcrypt.compare(password, user?.password || ""))) {
    const token = gentoken(user._id, res);

    res.status(200).json({
      _id: user._id,
      userName: user.userName,
      fullName: user.fullName,
      profilePic: user.profilePic,
      token,
    });
  } else {
    res.status(401).json({ error: "Invalid credential" });
    console.log(
      `Error: ${req.body.userName} - ${req.body.password} - ${user?.password}`
    );
  }
});

//@des Logout a user
//@route POST /api/auth/logout
//@access Public
export const logout = asyncHandler((req, res) => {
 res.cookie("jwt", "", {
  httpOnly: true,
  expires: new Date(0),
});

  res.status(200).json({ message: "Logged out successfully" });
});
