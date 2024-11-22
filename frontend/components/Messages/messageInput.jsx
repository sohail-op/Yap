import React from "react";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

import useSendMessage from "/hooks/useSendMessage";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handlesubmit();
    }
  };

  const handlesubmit = async (event) => {
    // event.preventDefault();
    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };

  return (
    <div className="bottom-2 absolute h-10 w-11/12 bg-transparent backdrop-blur-3xl z-10 border flex items-center border-gray-600 rounded-2xl shadow-inner">
      <input
        placeholder="Type your Message here..."
        type="search"
        className="bg-transparent placeholder-gray-400  rounded-2xl outline-none flex-grow text-left ml-3 w-full h-10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <RiSendPlaneFill
        className="h-8 w-8 text-gray-200 ml-2 absolute right-6"
        onClick={handlesubmit}
      />
    </div>
  );
}

export default MessageInput;
