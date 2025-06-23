"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const socketContext = createContext();

export const useSocketContext = () => {
  return useContext(socketContext);
};

export const SocketContextProvider = ({ children }) => {
  const { authUserData } = useAuthContext();

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (authUserData) {
      const socket = io(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}`, {
        query: { userId: authUserData?._id },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUserData]);

  return (
    <socketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </socketContext.Provider>
  );
};
