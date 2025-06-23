import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import Conversation from "../model/conversationModel.js";

// @desc Get all users except the logged-in user + last message for each
// @route GET /api/user/getUsersForSidebar
// @access Private
export const getUsersForSidebar = asyncHandler(async (req, res) => {
  const loggedInUserId = req.user._id;

  const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

  const enrichedUsers = await Promise.all(
    users.map(async (user) => {
      const conversation = await Conversation.findOne({
        participants: { $all: [loggedInUserId, user._id] },
      }).populate({
        path: "lastMessage",
        select: "message senderId createdAt",
      });

      return {
        ...user.toObject(),
        lastMessage: conversation?.lastMessage || null,
      };
    })
  );

  enrichedUsers.sort((a, b) => {
    const aTime = a.lastMessage?.createdAt ? new Date(a.lastMessage.createdAt).getTime() : 0;
    const bTime = b.lastMessage?.createdAt ? new Date(b.lastMessage.createdAt).getTime() : 0;
    return bTime - aTime;
  });

  res.status(200).json(enrichedUsers);
});
