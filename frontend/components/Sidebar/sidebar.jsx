import React from "react";

import Searchbar from "./searchbar";
import ChatToggle from "./chatToggle";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center text-gray-100 rounded-2xl bg-clip-padding backdrop-blur-lg border border-gray-600 bg-black/30 p-4 h-[90vh] w-[20vw] ">
      <Searchbar />
      <ChatToggle />
    </div>
  );
}
