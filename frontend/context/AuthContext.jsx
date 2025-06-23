"use client";

import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUserData, setAuthUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("chat-user"));
    if (storedUser) {
      setAuthUserData(storedUser);
    }
    setLoading(false);
  }, []);

  const updateAuthUserData = (user) => {
    setAuthUserData(user);
    localStorage.setItem("chat-user", JSON.stringify(user));
  };

  if (loading) {
    return <div>Loading Auth...</div>;
  }

  return (
    <AuthContext.Provider value={{ authUserData, updateAuthUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
