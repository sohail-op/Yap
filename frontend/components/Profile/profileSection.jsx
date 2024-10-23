import React from "react";

import useConversation from "@/zustand/useConversation";
import { useAuthContext } from "@/context/AuthContext";

function ProfileSection() {
  const { selectConversation } = useConversation();
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="ml-3 mt-20 w-full h-auto rounded-2xl flex flex-col relative gap-2 pt-3">
      <div className=" flex h-28">
        <div className="avatar online">
          <img
            src={
              selectConversation
                ? selectConversation.profilePic
                : isAuthenticated.profilePic
            }
            alt="Pfp"
            className=" rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col ml-2">
        <p className=" text-gray-200">
          {selectConversation
            ? selectConversation.fullName
            : `${isAuthenticated.fullName} (You)`}
        </p>
        {selectConversation ? (
          <p className="text-gray-200 text-xs">Last seen 5 mins ago</p>
        ) : null}
      </div>

      <div className="flex justify-center items-center">
        <div className="divider mt-3 -ml-3 py-0 h-1 bg-gray-600 w-11/12 rounded-2xl" />
      </div>
    </div>
  );
}

export default ProfileSection;
