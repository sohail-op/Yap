import React from "react";
import { twJoin } from "tailwind-merge";

import useConversation from "@/zustand/useConversation";
import { useSocketContext } from "@/context/SocketContext";
import {extractTime} from "@/util/extractTime";

function Conversation({ conversation }) {
  const { selectConversation, setSelectConversation } = useConversation();

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const isSelected = selectConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const lastMessageText = conversation?.lastMessage?.message;
  const lastMessageTime = conversation?.lastMessage?.createdAt;

  return (
    <>
      <div
        className={twJoin(
          isSelected ? "border-gray-100" : "border-gray-600",
          "h-16 border rounded-2xl flex items-center p-2 py-1 cursor-pointer my-1 gap-3 w-72 hover:bg-black/50 shadow-inner backdrop-blur-xl"
        )}
        onClick={() => setSelectConversation(conversation)}
      >
        <div className={twJoin(isOnline ? "online" : "offline", "avatar")}>
          <div className="w-12">
            <img
              src={conversation.profilePic}
              alt="Pfp"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-gray-100 font-medium">
              {truncateText(conversation.userName, 18)}
            </p>
            <span className="text-[11px] text-gray-400 font-light">
              {lastMessageTime ? extractTime(lastMessageTime) : ""}
            </span>
          </div>

          <p className="text-gray-400 text-sm font-light">
            {truncateText(lastMessageText || "Start a conversation", 24)}
          </p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

export default Conversation;
