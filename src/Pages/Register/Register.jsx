import React, { useContext } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import registerImage from "../../assets/register.png"; // Replace with your image path
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";




const Register = () => {
  const { createUser, } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    createUser(data.email, data.password) // নতুন ব্যবহারকারী তৈরি করা
      .then((result) => {
        const user = result.user; // নতুন ব্যবহারকারীর তথ্য
        // প্রোফাইল আপডেট
        return updateProfile(user, {
          displayName: data.name, // নাম যোগ করা
          photoURL: data.url, // প্রোফাইল ছবি যোগ করা
        });
      })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Your account has been created with name and photo.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl flex flex-col lg:flex-row">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}

                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.name && <span className="text-red-500">Pls Enter Your Name</span>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"

                name="email"
                {...register("email", { required: true })}
                placeholder="Type here"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.email && <span className="text-red-500">Pls Enter Your Email</span>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"

                name="password"
                {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.password?.type === 'required' && <span className="text-red-500">Pls Enter Your Password</span>}
              {errors.password?.type === "maxLength" && <span className="text-red-500">You can enter a maximum of 20 characters.</span>}
              {errors.password?.type === "minLength" && <span className="text-red-500">You can enter a minimum of 6 characters.</span>}
            </div>
            <div className="mb-4">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Photo URL
              </label>
              <input
                type="url"

                name="url"
                {...register("url", { required: true })}
                placeholder="Enter your Photo"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.url && <span className="text-red-500">Pls Enter Your Image Url</span>}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Already registered?{" "}
            <a href="/login" className="text-yellow-500 hover:underline">
              Go to log in
            </a>
          </p>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">Or sign up with</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-google"></i>
              </button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                <i className="fab fa-apple"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-8 bg-gray-50 rounded-r-lg">
          <img src={registerImage} alt="Illustration" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Register;
