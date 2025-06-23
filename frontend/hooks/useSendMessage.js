import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

import useConversation from "@/zustand/useConversation";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { selectConversation, messages, setMessages } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/messages/send/${selectConversation._id}`,
          {
            message: message,
          },
          {
            withCredentials: true,
          }
        )
        .then(function (res) {
          setMessages([...messages, res.data.message]);
        });
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
}

export default useSendMessage;
