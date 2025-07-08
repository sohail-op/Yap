import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuthContext } from "./../context/AuthContext";
// import useAuthData from "./useAuthData";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { updateAuthUserData } = useAuthContext();
  const router = useRouter();

  // const [isauth, setIsauth] = useState(false);
  // const x = useAuthData(isauth);
  //  console.log()

  const login = async ({ userName, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/login`, {
        userName,
        password,
      },{
        withCredentials: true,
      });

      localStorage.setItem("chat-user", JSON.stringify(res.data));
      const { token } = res.data;
      Cookies.set("jwt", token, {
        expires: 7,
        secure: true,
        sameSite: "None",
        domain: ".ksohail.dev",
      });
      // setIsauth(true);
      updateAuthUserData(res.data);
      toast.success("Login Successful");
      router.push("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(`Error: ${errorMessage}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}

export default useLogin;
