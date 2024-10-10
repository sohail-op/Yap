import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useAuthContext } from "/context/AuthContext";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { updateIsAuthenticated } = useAuthContext();
  const router = useRouter();

  const login = async ({ userName, password }) => {
    setLoading(true);
    try {
      await axios
        .post("http://localhost:5000/api/auth/login", {
          userName: userName,
          password: password,
        })
        .then(function (data) {
          localStorage.setItem("chat-user", JSON.stringify(data));
          updateIsAuthenticated(data);
          toast.success("Login Successful");
          router.push("/");
        });
    } catch (error) {
      toast.error("Error: ", error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
}

export default useLogin;
