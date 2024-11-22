import React from "react";
import { twJoin } from "tailwind-merge";

import useConversation from "@/zustand/useConversation";
import { useSocketContext } from "@/context/SocketContext";

function Conversation({ conversation }) {
  const { selectConversation, setSelectConversation } = useConversation();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const isSelected = selectConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  console.log("Convorsation: ", conversation);

  return (
    <>
      <div
        className={twJoin(
          isSelected ? "border-gray-100" : "border-gray-600",
          " h-16 border  rounded-2xl flex items-center p-2 py-1 cursor-pointer my-1 gap-3 w-72 hover:bg-black/50 shadow-inner backdrop-blur-xl"
        )}
        onClick={() => setSelectConversation(conversation)}
      >
        <div className={twJoin(isOnline ? "online" : "offline ", "avatar")}>
          <div className="w-12">
            <img
              src={conversation.profilePic}
              alt="Pfp"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <p className=" text-gray-100">
            {truncateText(conversation.userName, 18)}
          </p>
          {/* <div className="flex justify-between -mt-5">
            <p className="text-gray-400 text-xs pl-7 ">yesterday</p>
          </div> */}

          <p className="text-gray-400 text-sm font-light">
            {truncateText(
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, voluptate provident laborum inventore natus vel dolores, nam veniam tempora assumenda dolore quisquam! Velit incidunt eius voluptatibus aut debitis totam perspiciatis!",
              24
            )}
          </p>
        </div>

        {/* NOtification - number of unread messages, might implement later */}

        {/* <p className="flex items-center justify-center bg-white rounded-full text-black h-6 w-9 text-xs">
          4
        </p> */}
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

export default Conversation;
