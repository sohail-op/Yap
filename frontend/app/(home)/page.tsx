"use client";

import Image from "next/image";

import Sidebar from "@/components/Sidebar/sidebar";
import Messages from "@/components/Messages/messages";

export default function Home() {
  return (
    <div className="justify-center items-center flex h-screen">
      <h1 className="text-9xl">Home Page!</h1>
      {/* <Sidebar />
      <Messages /> */}
    </div>
  );
}
