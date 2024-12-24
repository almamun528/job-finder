import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const SocialLogin = () => {
  const { signInWithGoogle,user } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result?.user)
        toast.success("Welcome to job finder")
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };
  return (
    <div className="m-4">
      <ToastContainer />
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
