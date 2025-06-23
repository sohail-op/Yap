import React from "react";

import Messages from "./messages";
import MessageInput from "./messageInput";
import MessageHeader from "./messageHeader";
import useConversation from "@/zustand/useConversation";

function MessageContainer() {
  const { selectConversation } = useConversation();
  return (
    <div className="flex flex-col justify-center text-gray-100 rounded-2xl backdrop-blur-lg border border-gray-600 bg-black/30 h-[90vh] w-[40vw]">
      {!selectConversation ? (
        noChatSelected()
      ) : (
        <>
          <MessageHeader />
          <Messages />
          <span className="flex justify-center">
            <MessageInput />
          </span>
        </>
      )}
    </div>
  );
}

const noChatSelected = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <p className="text-4xl">YAP</p>

      <p className="text-xl">welcome to YAP, select a chat to start.</p>
    </div>
  );
};

export default MessageContainer;
