import axios from "axios";
import React, { useContext } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext, { AuthContextType } from "../../context/AuthContext";

const AdminLogin = () => {
    const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const [emailError, setEmailError] = useState('');

  const [error, setError] = useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('hello');
    let formValid = true;
    let emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === '') {
      formValid = false;
      setEmailError('Please enter email');
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setEmailError('Please enter email in valid format');
    } else {
      formValid = true;
      setEmailError('');
    }

    if (formValid) {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let data = {
        email: email,
        password: password,
      };

      try {
        const response = await axios.post(
          'https://jobs-dashboard-api.onrender.com/api/admins/login',
          data,
          config
        );
        console.log(response.data);
        if(response.data.message == "login successful")
        {
          auth.login();
          navigate('/adminjobslist');
        }
        localStorage.setItem('token', response.data.token);
        
      } catch (err: any) {
        console.log(err+"The error is thrown from here");
        //setError(err.response.data.errors || 'something went wrong');
      }
    }
  };

    return(
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-500">
                   Admin Portal
                </h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form className="mt-6" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-2">
                        <label
                            // for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Admin Email
                        </label>
                        <input
                            type='email'
                            placeholder='Email Address'
                            name='email'
                            value={email}
                            required
                            onChange={(e) => onChange(e)}
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
                            type='password'
                            required
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={(e) => onChange(e)}
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
                        <input type='submit' value='Login' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                        </input>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AdminLogin;