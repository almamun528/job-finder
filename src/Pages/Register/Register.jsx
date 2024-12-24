import Lottie from "lottie-react";
import React, { useContext } from "react";
import RegisterAnimation from "../../assets/register.json";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      // Password Validation PopUp
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "It must be at least 6 characters long, contain one uppercase letter, and one number !",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result?.user);
        toast.success("Your Are Registered!");
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/3 lg:text-left">
            {/* Animation Image  */}
            <Lottie animationData={RegisterAnimation}></Lottie>
          </div>
          {/* tost popUp */}
          <ToastContainer />
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl m-3 text-center font-bold">
              Register now!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
