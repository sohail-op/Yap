import React from "react";
import { CgProfile } from "react-icons/cg";

function Conversation() {
  return (
    <>
      <div className=" h-16 border border-gray-600 rounded-2xl flex items-center p-2 py-1 cursor-pointer my-1 gap-3 w-72 hover:bg-black/50 shadow-inner backdrop-blur-xl">
        <div className="avatar online">
          <div className="w-12">
            <CgProfile className="h-12 w-12 text-gray-100" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-between w-full">
            <p className=" text-gray-100">UserName</p>
            <p className="text-gray-400 text-xs pl-7">yesterday</p>
          </div>

          <p className="text-gray-400 text-sm truncate font-light">
            Lorem ipsum dolor volu...
          </p>
        </div>

        <div className="flex items-center justify-center bg-white text-black rounded-full h-6 w-6 text-xs">
          3
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

export default Conversation;
