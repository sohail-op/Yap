import asyncHandler from "express-async-handler";

import User from "../model/userModel.js";

//@des get all user (except loggedIn user)
//@route GET /api/
//@access Private
export const getUsersForSidebar = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user._id;

  const filteredUsers = await User.find({
    _id: { $ne: loggedInUserId },
  }).select("-password");

  res.status(200).json(filteredUsers);
});
