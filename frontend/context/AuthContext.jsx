"use client";

import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUserData, setAuthUserData] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("1");
    const storedUser = JSON.parse(localStorage.getItem("chat-user"));
    // console.log("2");
    if (storedUser) {
      // console.log("3");
      setAuthUserData(storedUser);
    }
    setLoading(false);
  }, []);

  // console.log("auth user", authUserData);

  if (loading) {
    return <div>Loading Auth...</div>;
  }

  const updateAuthUserData = (user) => {
    // console.log("4");
    setAuthUserData(user);
  };

  return (
    <AuthContext.Provider value={{ authUserData, updateAuthUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
