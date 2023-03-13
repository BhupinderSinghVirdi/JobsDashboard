import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

const AdminLogin = () => {
    const [LogStatus, updateLogStatus] = useState({
        email: '',
        otp: ''
    })

    // const { email, password } = formData;

    const [emailError, setEmailError] = useState('');

    const [error, setError] = useState();
    
    const handlechange = (e : Event) => {
        updateLogStatus(LogStatus)
    };

    const handleSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return(
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-500">
                   Admin Portal
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            // for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Admin Email
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
                    <a
                        href="#"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                            Admin Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AdminLogin;