import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useAuthContext } from "/context/AuthContext";

function useSignup() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { updateAuthUserData } = useAuthContext();

  const signup = async ({
    fullName,
    userName,
    gender,
    password,
    confirmPassword,
  }) => {
    setLoading(true);

    try {
      const success = handleInputError({
        fullName,
        userName,
        gender,
        password,
        confirmPassword,
      });
      if (!success) return toast.error(`Something went wrong`);

      await axios
        .post("http://localhost:5000/api/auth/signup", {
          fullName: fullName,
          userName: userName,
          gender: gender,
          password: password,
          confirmPassword: confirmPassword,
        })
        .then(function (res) {
          toast.success("signUp Successful");
          localStorage.setItem("chat-user", JSON.stringify(res.data));
          updateAuthUserData(res.data);
          router.push("/");
        });
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
}

function handleInputError({
  fullName,
  userName,
  gender,
  password,
  confirmPassword,
}) {
  if (!fullName || !userName || !gender || !password || !confirmPassword) {
    toast.error(`Please fill in all the fields`);
    return false;
  }
  if (password != confirmPassword) {
    toast.error(`Password do not match`);
    return false;
  }
  if (password.length < 6) {
    toast.error(`Password must be at least 6 characters`);
    return false;
  }
  return true;
}

export default useSignup;
