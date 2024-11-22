"use client";

import React, { useState } from "react";
import Link from "next/link";
import useLogin from "/hooks/useLogin";

const Login = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const { login, loading } = useLogin();

  const handleLogin = (event) => {
    event.preventDefault();
    login(data);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <span className="loading loading-spinner w-12 h-12"></span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 py-5 px-3">
        <h1 className="items-center justify-center flex font-bold text-2xl mb-4">
          User Login
        </h1>
        <form action="">
          <div className="flex flex-col items-center gap-3">
            <input
              type="text"
              placeholder="Username"
              name="userName"
              className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
              value={data.userName}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
              value={data.password}
              onChange={handleChange}
            />
            <div className="text-xs underline hover:text-blue-500 font-medium flex w-full justify-center">
              Forgot Password?
            </div>
            <button
              type="submit"
              className="btn w-3/4 bg-white text-black border-white hover:!bg-white hover:border-white"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-xs font-medium text-center mt-2">
          Don't have account?{" "}
          <Link href="/signup">
            <span className="underline hover:text-blue-500">SignUp.</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
