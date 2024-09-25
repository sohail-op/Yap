import React from "react";

import Messages from "./messages";
import MessageInput from "./messageInput";
import MessageHeader from "./messageHeader";

function MessageContainer() {
  return (
    <div className="flex items-center justify-center text-gray-100 rounded-2xl bg-clip-padding backdrop-blur-lg border border-gray-600 p-4 bg-black/30 h-[90vh] w-[40vw] ">
      <MessageHeader />
      <Messages />
      <MessageInput />
    </div>
  );
}

export default MessageContainer;
