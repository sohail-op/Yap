import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useConversation from "@/zustand/useConversation";

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/messages/${selectConversation._id}`, {
            withCredentials: true,
          })
          .then(function (res) {
            setMessages(res.data);
          });
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectConversation?._id) getMessage();
  }, [selectConversation?._id, setMessages]);

  return { messages, loading };
}

export default useGetMessages;
