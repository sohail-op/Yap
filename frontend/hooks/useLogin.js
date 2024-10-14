import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

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
        .then(function (res) {
          localStorage.setItem("chat-user", JSON.stringify(res.data));
          const { token } = res.data;
          Cookies.set("jwt", token, {
            expires: 7,
            secure: true,
            sameSite: "Strict",
          });
          updateIsAuthenticated(res);

          // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
