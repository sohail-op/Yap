import React from "react";

function ProfileHeader() {
  return (
    <header className="top-0 w-full rounded-2xl absolute h-10">
      <p className=" text-gray-200 font-semibold m-5">Profile</p>

      <div className="flex justify-center items-center w-full">
        <div className="divider mt-3 py-0 h-1 bg-gray-600 w-11/12 rounded-2xl" />
      </div>
    </header>
  );
}

export default ProfileHeader;
