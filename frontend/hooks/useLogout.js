import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "/context/AuthContext";

function useLogout() {
  const { updateAuthUserData } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/logout`);
      localStorage.removeItem("chat-user");
      updateAuthUserData(null);
      toast.success("Logged out successfully");
      //   router.push("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
}

export default useLogout;

// loding logic pending
