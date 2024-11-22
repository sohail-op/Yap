"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Sidebar from "@/components/Sidebar/sidebar";
import MessageContainer from "@/components/Messages/messageContainer";
import ProfileContainer from "@/components/Profile/profileContainer";
import { useAuthContext } from "@/context/AuthContext";

export default function Home() {
  const { authUserData } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!authUserData) {
      console.log("home auth:", authUserData);
      // console.log("home loading:", loading);
      router.push("/login");
    }
  }, [authUserData, router]);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen w-full">
  //       <span className="loading loading-spinner w-12 h-12"></span>
  //     </div>
  //   );
  // }
  return (
    <div className="justify-center items-center flex h-screen gap-6">
      <Sidebar />
      <MessageContainer />
      <ProfileContainer />
    </div>
  );
}
