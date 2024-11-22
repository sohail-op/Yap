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

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({
    receiverId,
    senderId,
    message,
  });
  if (newMessage) {
    await conversation.messages.push(newMessage._id);
  }
  await newMessage.save();
  await conversation.save();

  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

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
    res.status(200).json([]);
  }

  const messages = conversation.messages;

  res.json(messages);
});
