import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function MessageInput() {
  return (
    <div className="bottom-2 h-10 w-11/12 bg-transparent backdrop-blur-3xl z-10 border items-center border-gray-600 rounded-2xl absolute flex shadow-inner ">
      <input
        placeholder="Type your Message here..."
        type="search"
        className="bg-transparent placeholder-gray-400  rounded-2xl outline-none flex-grow text-left ml-3 w-full h-10"
      />
      <RiSendPlaneFill className="h-8 w-8 text-gray-200 ml-2 absolute right-6" />
    </div>
  );
}

export default MessageInput;
