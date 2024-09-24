import React from "react";

function ChatToggle() {
  return (
    <>
      <div className="flex rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md border-separate mt-3 w-full">
        <div className="rounded-xl flex bg-blue-500 w-1/2 justify-center">
          <p className="text-xl text-gray-200">Chat</p>
        </div>

        <div className="rounded-xl flex w-1/2 justify-center">
          <p className="text-xl text-gray-200">Setting</p>
        </div>
      </div>
      <div className="divider mt-4 -mb-4 py-0 h-1 bg-gray-400 blur-[1px]" />
    </>
  );
}

export default ChatToggle;
