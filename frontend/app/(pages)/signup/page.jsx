"use client";
import React, { useState } from "react";
import { twJoin } from "tailwind-merge";

import Link from "next/link";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import useSignup from "/hooks/useSignup";

const SignUp = () => {
  const [data, setData] = useState({
    fullName: "",
    userName: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const { signup } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("client side: ", data);
    signup(data);
  };

  const next = () => {
    setActiveTab((current) => current + 1);
  };

  const prev = () => {
    setActiveTab((current) => current - 1);
  };

  const [activeTab, setActiveTab] = useState(0);

  const formELements = [
    <Form1 key="form1" data={data} handleChange={handleChange} />,
    <Form2 key="form2" data={data} handleChange={handleChange} />,
    <Form3 key="form3" data={data} handleChange={handleChange} />,
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-md  backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 py-5 px-3">
        <h1 className="items-center justify-center flex font-bold text-2xl mb-4">
          User SignUp
        </h1>

        <div>{formELements[activeTab]}</div>

        {/* buttons */}
        <div className="py-2 items-center flex flex-col justify-center">
          {/* form 1 button */}
          <button
            className={twJoin(
              activeTab === 0 ? " " : "hidden",
              "btn w-3/4 bg-white text-black border-white hover:!bg-white hover:border-white"
            )}
            onClick={next}
          >
            Next
          </button>

          {/* form 2 button */}
          <span
            className={twJoin(
              activeTab === 1 ? " " : "hidden",
              "flex items-center justify-center"
            )}
          >
            <button
              className="btn w-3/4 bg-white text-black border-white hover:!bg-white hover:border-white"
              onClick={prev}
            >
              Prev
            </button>

            <button
              className="btn w-3/4 bg-white text-black border-white hover:!bg-white hover:border-white"
              onClick={next}
            >
              Next
            </button>
          </span>

          {/* form 3 button */}
          <span
            className={twJoin(
              activeTab === 2 ? " " : "hidden",
              "flex items-center justify-center"
            )}
          >
            <button
              className="btn bg-white text-black border-white hover:!bg-white hover:border-white w-2/3"
              onClick={prev}
            >
              Prev
            </button>

            <button
              className="btn bg-white text-black border-white hover:!bg-white hover:border-white w-2/3"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </span>
        </div>

        <div className="text-xs font-medium text-center mt-2 ">
          Already have account?{" "}
          <Link href="/login">
            <span className="underline hover:text-blue-500">Login.</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// might fix css in form2.
// fix button size in form2 and form3.
