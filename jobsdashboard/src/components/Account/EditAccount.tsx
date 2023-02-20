import React from "react";
import { ReactDOM } from "react";

interface Props {
    email: string;
    name: string;
    phoneNumber: number;
}

const EditAcc = (props : Props) => {
    return(
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-500">
                    Account Details
                </h1>
                <form className="mt-6">
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
                            value={props.email}
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
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={props.name}
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
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            value={props.phoneNumber}
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-blue-600 hover:underline"
                    >
                        Stop Notifications?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                            Edit
                        </button>
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-100">
                            Delete Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAcc;