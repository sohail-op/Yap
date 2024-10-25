import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        await axios
          .get("http://localhost:5000/api/user ", {
            withCredentials: true,
          })
          .then(function (res) {
            setConversations(res.data);
          });
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { conversations, loading };
}

export default useGetConversation;
