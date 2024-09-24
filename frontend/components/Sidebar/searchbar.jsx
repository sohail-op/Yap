import React from "react";
import { MdOutlinePersonSearch } from "react-icons/md";

function Searchbar() {
  return (
    <div className="flex items-center border border-white rounded-2xl relative w-64">
      <MdOutlinePersonSearch className="h-8 w-8 text-gray-200 ml-2" />
      <input
        placeholder="Search..."
        type="search"
        className="bg-transparent placeholder-gray-200  rounded-2xl outline-none flex-grow text-center"
      />
      <div className="divider h-1 text-black" />
    </div>
  );
}

export default Searchbar;
