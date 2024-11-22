import React from "react";

const Form2 = (props) => {
  const { data, handleChange } = props;

  return (
    <form className="flex flex-col items-center gap-3">
      <div className=" backdrop-filter backdrop-blur-md bg-opacity-10 border border-white flex flex-col cursor-pointer rounded-md mx-6 h-28 w-4/5 px-4">
        <label className="text-white mt-5">Gender:</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={data.gender === "Male"}
              onChange={handleChange}
              className="h-4 w-4 cursor-pointer"
            />
            <span className="p-2 text-white">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={data.gender === "Female"}
              onChange={handleChange}
              className="h-4 w-4 cursor-pointer"
            />
            <span className="p-2 text-white">Female</span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default Form2;
