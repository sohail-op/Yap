import React from "react";
import { twJoin } from "tailwind-merge";

import { useAuthContext } from "@/context/AuthContext";
import useConversation from "@/zustand/useConversation";
import { extractTime } from "@/util/extractTime";

function Message({ message }) {
  const { authUserData } = useAuthContext();
  const { selectConversation } = useConversation();

  const fromMe = message.senderId === authUserData?._id;
  const pfp = fromMe ? authUserData.profilePic : selectConversation.profilePic;
  const time = extractTime(message.createdAt);

  return (
    <div className="flex flex-col">
      <div className={twJoin(fromMe ? "chat-end" : "chat-start", "chat")}>
        <div className="w-10 chat-image avatar">
          <img src={pfp} alt="Pfp" className="rounded-full" />
        </div>

        <div className="chat-bubble p-4 backdrop-blur-3xl shadow-inner bg-transparent rounded-2xl text-gray-200 max-w-[70%]">
          {message.message}
        </div>
        <div className="chat-footer opacity-50">{time}</div>
      </div>
    </div>
  );
}

export default Message;
