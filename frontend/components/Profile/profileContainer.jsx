import React from "react";

import ProfileSection from "./profileSection";
import ProfileHeader from "./profileHeader";

function ProfileContainer() {
  return (
    <div className="flex items-start text-gray-100 rounded-2xl bg-clip-padding backdrop-blur-lg border border-gray-600 bg-black/30 h-[90vh] w-[17vw] gap-2 ">
      <ProfileHeader />
      <ProfileSection />
    </div>
  );
}

export default ProfileContainer;
