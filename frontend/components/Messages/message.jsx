import React from "react";
import { CgProfile } from "react-icons/cg";

function Message() {
  return (
    <div className="flex flex-col">
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <CgProfile className="h-12 w-12 text-gray-200 rounded-full" />
        </div>

        <div className="chat-bubble p-4 backdrop-blur-3xl shadow-inner bg-transparent rounded-2xl text-gray-200 w-2/3">
          I hate you! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          quos assumenda labore, eaque, minus incidunt quod non nesciunt sint
          consequatur ducimus maiores, alias asperiores doloribus corporis? In
          iure odio amet?
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
}

export default Message;
