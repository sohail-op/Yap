import asyncHandler from "express-async-handler";

export const sendMessage = asyncHandler(async (req, res) => {
  res.send("message send");
});

export const getMessage = asyncHandler(async (req, res) => {
  res.send("message get");
});
