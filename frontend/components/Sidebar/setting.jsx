import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

import useLogout from "@/hooks/useLogout";

function Setting() {
  const { logout } = useLogout();

  const handleLogout = () => {
    console.log("Logged Out");
    logout();
  };

  return (
    <div className="flex flex-col justify-between h-full mt-4">
      <div className="gap-2 flex flex-col items-center">
        <button className="btn btn-outline h-11 w-64 border border-gray-600 rounded-2xl items-center p-2 py-1 cursor-pointer my-1 text-gray-200 shadow-inner">
          Change Background
        </button>
        <button className="btn btn-outline h-11 w-64 border border-gray-600 rounded-2xl items-center p-2 py-1 cursor-pointer my-1 text-gray-200 shadow-inner">
          Dummy Setting 1
        </button>
        <button className="btn btn-outline h-11 w-64 border border-gray-600 rounded-2xl items-center p-2 py-1 cursor-pointer my-1 text-gray-200 shadow-inner">
          Dummy Setting 2
        </button>
      </div>

      <button
        className="btn btn-outline btn-error self-center w-60 h-12 rounded-2xl items-center p-2 py-1 cursor-pointer my-1 shadow-inner text-xl"
        onClick={handleLogout}
      >
        Logout{" "}
        <span>
          <RiLogoutBoxRLine />
        </span>
      </button>
    </div>
  );
}

export default Setting;
