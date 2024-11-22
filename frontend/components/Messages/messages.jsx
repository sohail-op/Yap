import React from "react";

import Message from "./message";
import useGetMessages from "@/hooks/useGetMessages";
import useListenMessages from "@/hooks/useListenMessages";

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  return (
    <>
      <div className="no-scrollbar rounded-2xl overflow-y-scroll px-2 h-[74vh] mt-5">
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id}>
              <Message message={message} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Messages;
