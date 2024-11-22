import React, { useState } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import toast from "react-hot-toast";

import useGetConversation from "@/hooks/useGetConversation";
import useConversation from "@/zustand/useConversation";

function Searchbar() {
  const [search, setSearch] = useState("");
  const { setSelectConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  const handleSearch = (e) => {
    // e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.userName?.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <div className="flex items-center border border-white rounded-2xl relative w-64">
      <MdOutlinePersonSearch className="h-8 w-8 text-gray-200 ml-2" />
      <input
        placeholder="Search..."
        type="search"
        className="bg-transparent placeholder-gray-200  rounded-2xl outline-none flex-grow text-center"
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="divider h-1 text-black" />
    </div>
  );
}

export default Searchbar;
