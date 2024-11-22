import React from "react";

import Conversation from "./conversation";
import useGetConversation from "@/hooks/useGetConversation";

function Conversations() {
  const { conversations, loading } = useGetConversation();
  return (
    <div className="overflow-auto no-scrollbar mt-1 -mb-1 scroll-smooth rounded-2xl h-[73vh]">
      {conversations.map((conversation, index) => (
        <Conversation
          key={index}
          conversation={conversation}
          userName={conversation.userName}
        />
      ))}
    </div>
  );
}

export default Conversations;
