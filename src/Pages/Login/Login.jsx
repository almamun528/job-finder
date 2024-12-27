import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import LoginAnimation from '../../assets/login.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // this form is hold users location
  const from = location.state || '/'

    const{userLogin}= useContext(AuthContext)
      const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        // User login function
        userLogin(email, password)
        .then(result=>{
            console.log(result?.user)
            toast.success('Welcome Back')
            // this navigate brings his targeted route 
            setTimeout(()=>{
              navigate(from)
            },1000)
        })
        .catch(error=>{
            console.log(error?.message)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Id And Password Is Not Matching!",
          });
        })
      };
    return (
      <>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-1/3 lg:text-left">
              {/* Animation Image  */}
              <Lottie animationData={LoginAnimation}></Lottie>
            </div>
            {/* tost popUp */}
            <ToastContainer />
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="text-5xl m-3 text-center font-bold">
                Login now!
              </h1>
              <form onSubmit={handleLogin} className="card-body">
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
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div>
                <SocialLogin/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;