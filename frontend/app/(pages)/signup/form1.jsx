import React from "react";

const Form1 = (props) => {
  const { data, handleChange } = props;

  return (
    <form className="flex flex-col items-center gap-3">
      <input
        type="text"
        placeholder="Full Name"
        className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
        value={data.fullName}
        onChange={handleChange}
        name="fullName"
      />

      <input
        type="text"
        placeholder="User Name"
        className="input w-3/4 backdrop-filter backdrop-blur-md bg-opacity-10 placeholder-white border-white"
        value={data.userName}
        onChange={handleChange}
        name="userName"
      />
    </form>
  );
};

export default Form1;
