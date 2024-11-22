import React from "react";

const Form3 = (props) => {
  const { data, handleChange } = props;

  return (
    <form className="flex flex-col items-center gap-3">
      <input
        type="password"
        placeholder="Password"
        className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
        value={data.password}
        onChange={handleChange}
        name="password"
      />

      <input
        type="password"
        placeholder="confirm Password"
        className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
        value={data.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
      />
    </form>
  );
};

export default Form3;
