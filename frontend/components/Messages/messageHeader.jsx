import React from "react";
import useConversation from "@/zustand/useConversation";

function MessageHeader() {
  const { selectConversation } = useConversation();
  return (
    <header className="top-0 w-full rounded-2xl absolute h-14">
      <div className="mt-1 ml-4 flex gap-2 h-14 rounded-full">
        <div className="avatar">
          <img
            src={selectConversation.profilePic}
            alt="Pfp"
            className=" rounded-full"
          />
        </div>

        <div className="flex flex-col ">
          <p className=" text-gray-200 text-xl">
            {selectConversation.userName}
          </p>
          <p className="text-gray-200 text-sm">{selectConversation.fullName}</p>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-2">
        <div className="divider mt-3 py-0 h-1 bg-gray-600 w-11/12 rounded-2xl" />
      </div>
    </header>
  );
}

export default MessageHeader;
