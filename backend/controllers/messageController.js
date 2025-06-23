import asyncHandler from "express-async-handler";

import Conversation from "../model/conversationModel.js";
import Message from "../model/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

//@des send a message
//@route POST /api/messages/send/:id
//@access Private
export const sendMessage = asyncHandler(async (req, res) => {
  const { id: receiverId } = req.params;
  const senderId = req.user._id;
  const { message } = req.body;

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = await Message.create({
    receiverId,
    senderId,
    message,
  });

  conversation.messages.push(newMessage._id);
  conversation.lastMessage = newMessage._id;
  await conversation.save();

  const ioMessage = {
    _id: newMessage._id,
    senderId,
    receiverId,
    message: newMessage.message,
    createdAt: newMessage.createdAt,
  };

  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", ioMessage);
  }

  io.to(senderId.toString()).emit("newMessage", ioMessage);

  res.status(201).json({ message: newMessage });
});

//@des get a message
//@route GET /api/messages/:id
//@access Private
export const getMessage = asyncHandler(async (req, res) => {
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  }).populate("messages");

  if (!conversation) {
    return res.status(200).json([]);
  }

  const messages = conversation.messages;

  res.json(messages);
});
