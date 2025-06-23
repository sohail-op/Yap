import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSocketContext } from "@/context/SocketContext";

function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { socket } = useSocketContext();

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/user/getUsersForSidebar`, {
          withCredentials: true,
        });
        setConversations(res.data);
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        console.error("Conversation fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (message) => {
      setConversations((prev) => {
        const updated = prev.map((conv) => {
          const match =
            conv._id === message.senderId || conv._id === message.receiverId;
          if (match) {
            return {
              ...conv,
              lastMessage: message,
            };
          }
          return conv;
        });
        return updated;
      });
    };

    socket.on("newMessage", handleNewMessage);
    return () => socket.off("newMessage", handleNewMessage);
  }, [socket]);

  return { conversations, loading };
}

export default useGetConversation;
