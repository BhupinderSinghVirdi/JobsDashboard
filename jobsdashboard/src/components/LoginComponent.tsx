import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import LinkedInPage from "./LinkedInLoginComponent";
import { ToastContainer, toast, Flip } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const [LogStatus, updateLogStatus] = useState({
    email: "",
    otp: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const { email, password } = formData;

  const [emailError, setEmailError] = useState("");

  const [error, setError] = useState();

  const handlechange = (e: Event) => {
    updateLogStatus(LogStatus);
  };

  const login = (data: any) => {
    let params = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:3000/api/login", params)
      .then(function (response) {
        //   IF EMAIL ALREADY EXISTS
        if (response.data.success === false) {
          toast.error(response.data.error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
        } else {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
          localStorage.setItem("auth", response.data.token);
          //   setTimeout(() => {
          //     history.push("/");
          //   }, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-500">
          Log into the portal
        </h1>
        <form
          className="mt-6"
          onSubmit={handleSubmit(login)}
        >
          <div className="mb-2">
            <label
              // for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              // for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-blue-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-6 ">
            <LinkedInPage />
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          New to the Portal?{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Register
          </a>
        </p>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          limit={1}
          transition={Flip}
        />
      </div>
    </div>
  );
};
export default Login;
