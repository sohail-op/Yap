import React, { useState } from "react";
import { twJoin } from "tailwind-merge";

import Conversations from "./conversations";
import Setting from "./setting";

function ChatToggle() {
  const [activeTab, setActiveTab] = useState("chat");
  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  return (
    <>
      <div className="flex rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md border-separate mt-3 w-full">
        {/* chat div */}
        <div
          className={twJoin(
            "rounded-xl flex w-1/2 justify-center",
            activeTab === "chat" ? "bg-blue-500" : ""
          )}
          onClick={() => handleTabChange("chat")}
        >
          <p className="text-xl text-gray-200">Chat</p>
        </div>

        {/* setting div */}
        <div
          className={twJoin(
            "rounded-xl flex w-1/2 justify-center",
            activeTab === "setting" ? "bg-blue-500" : ""
          )}
          onClick={() => handleTabChange("setting")}
        >
          <p className="text-xl text-gray-200">Setting</p>
        </div>
      </div>

      <div className="divider mt-4 -mb-4 py-0 h-1 bg-gray-400 blur-[1px]" />

      <div className="flex flex-col items-center text-gray-100 rounded-2xl p-4  w-[20vw] ">
        {activeTab === "chat" ? <Conversations /> : <Setting />}
      </div>
    </>
  );
}

export default ChatToggle;
