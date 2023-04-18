import React, { useContext } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import LinkedInPage from "./LinkedInLoginComponent";
import { ToastContainer, toast, Flip } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import AuthContext, { AuthContextProvider } from "../context/AuthContext";


const Login = () => {
  const [token , setToken] = useState({
    token: "",
  });

//const { setToken } = useContext(AuthContext);
  
   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
//   const [token, setToken] = useState("");

  const login = (data: any) => {
    let params = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:3001/api/account/login", params)
      .then(function (response) {
        setToken(response.data.token);
          navigate('/jobs');
        })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-grey-500">
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
                 {...register("email", {required : true})}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-grey-500 bg-white border rounded-md focus:border-grey-400 focus:ring-grey-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
             {...register("password",  {required : true})}
             type="password"
             className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
           />
          </div>
          <a href="signUp" className="text-xs text-grey-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-grey-700 transition-colors duration-200 transform bg-grey-500 rounded-md hover:bg-grey-700 focus:outline-none focus:bg-grey-400"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          New to the Portal?{" "}
          <a href="/signUp" className="font-medium text-grey-600 hover:underline">
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
function setToken(token: any) {
    throw new Error("Function not implemented.");
}

