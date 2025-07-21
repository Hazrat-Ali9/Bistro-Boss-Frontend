import React, { useContext, useEffect, useRef, useState } from "react";
import login from "../../assets/login_image.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const {singInUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const form = { email, password };
    singInUser(email, password)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(from, {replace:true})
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false); // ক্যাপচা সঠিক হলে বাটন এনারেবল হবে
      alert("Captcha validated successfully!");
    } else {
      setDisabled(true); // ক্যাপচা ভুল হলে বাটন ডিজেবল থাকবে
      alert("Captcha validation failed! Please try again.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row w-full max-w-5xl">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-6">
          <Link to={'/'}>
          <h1 className="mb-3 text-yellow-500 font-bold underline">GO HOME PAGE</h1></Link>
            <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Type the captcha"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
                <button
                  type="button"
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline mt-2 btn-xs w-full"
                >
                  Validate Captcha
                </button>
              </div>
              <button
                type="submit"
                disabled={disabled}
                className={`w-full py-2 px-4 rounded-md text-white ${
                  disabled ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
                }`}
              >
                Sign in
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Don't you already have an account?{" "}
              <Link to="/singUp" className="text-yellow-500 hover:underline">
                Go to Sign Up
              </Link>
            </p>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">Or sign up with</p>
              <div className="flex items-center justify-center mt-2 space-x-4">
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                  <i className="fab fa-google"></i>
                </button>
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                  <i className="fab fa-apple"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-6">
            <img src={login} alt="Illustration" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
