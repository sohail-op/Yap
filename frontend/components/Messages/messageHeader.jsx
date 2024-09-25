import React from "react";
import { CgProfile } from "react-icons/cg";

function MessageHeader() {
  return (
    <header className="top-0 w-full rounded-2xl absolute h-14">
      <div className="mt-3 ml-6 flex gap-2">
        <div className="avatar online">
          <CgProfile className="h-10 w-10 text-gray-200" />
        </div>

        <div className="flex flex-col">
          <p className=" text-gray-200">UserName</p>
          <p className="text-gray-200 text-xs">FullName</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="divider mt-3 py-0 h-1 bg-gray-600 w-11/12 rounded-2xl" />
      </div>
    </header>
  );
}

export default MessageHeader;
