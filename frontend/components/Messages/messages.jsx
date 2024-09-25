import React from "react";

import Message from "./message";
function Messages() {
  return (
    <>
      <div className=" my-10 scroll-smooth no-scrollbar rounded-2xl overflow-y-scroll h-[86%] mt-5 mb-1">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </>
  );
}

export default Messages;
