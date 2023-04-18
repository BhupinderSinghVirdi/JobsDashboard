import axios from "axios";
import React, { useState } from "react";
import { ReactDOM } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const CreateAcc = () => {

    const [token , setToken] = useState({
        token: "",
      });

      const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const acc = (data : any) => {
    let params = {
        email: data.email,
        name : data.name,
        phone: data.phone,
        password: data.password,
      };
      axios
        .post("http://localhost:3001/api/account/SignUp", params)
        .then(function (response) {
            localStorage.setItem("auth", response.data.token);
            navigate('/login');
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-grey-500">
          Account Details
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(acc)}>
          <div className="mb-2">
            <label
              // for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-grey-500 bg-white border rounded-md focus:border-grey-400 focus:ring-grey-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              // for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="Text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              // for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Phone
            </label>
            <input
              {...register("phone", { required: true })}
              type="number"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
                htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-grey-600 hover:underline">
            Don't want Notifications?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-grey-900 transition-colors duration-200 transform bg-grey-500 rounded-md hover:bg-grey-400 focus:outline-none focus:bg-grey-400">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAcc;
