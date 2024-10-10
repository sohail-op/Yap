import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthContext } from "/context/AuthContext";

function useLogout() {
  const router = useRouter();
  const { updateIsAuthenticated } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/logout");
      localStorage.removeItem("chat-user");
      updateIsAuthenticated(null);
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
