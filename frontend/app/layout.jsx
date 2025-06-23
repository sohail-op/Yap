// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { SocketContextProvider } from "@/context/SocketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YAP - Chat App",
  description: "Developed by Sohail Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <SocketContextProvider>
            <Toaster />
            {children}
          </SocketContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
