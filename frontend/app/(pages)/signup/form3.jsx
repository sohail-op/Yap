import React from "react";

const Form3 = (props) => {
  const { data, handleChange } = props;

  return (
    <form className="flex flex-col items-center gap-3">
      <input
        type="password"
        placeholder="Password"
        className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
        value={data.pwd}
        onChange={handleChange}
        name="pwd"
      />

      <input
        type="password"
        placeholder="confirm Password"
        className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
        value={data.confirmPwd}
        onChange={handleChange}
        name="confirmPwd"
      />
    </form>
  );
};

export default Form3;
