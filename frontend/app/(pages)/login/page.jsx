import React from "react";

const Login = () => {
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
              className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
            />
            <div className="text-xs underline hover:text-blue-500 font-medium flex w-full justify-center">
              Forgot Password?
            </div>
            <button className="btn w-3/4 bg-white text-black border-white hover:!bg-white hover:border-white">
              Login
            </button>
          </div>
        </form>

        <div className="text-xs font-medium ">
          Don't have account?{" "}
          <span className="underline hover:text-blue-500">SignUp.</span>
        </div>
      </div>
    </div>
  );
};
export default Login;
