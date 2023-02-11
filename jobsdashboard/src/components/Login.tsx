import React from 'react';
import ReactDOM from 'react-dom';

const Login = () => {
    return(
        <div>
            <h1>
                <input type="radio">Select your social Login</input>
                <input type="text" placeholder='demo@domain.ca'>Email</input>
                <input type="text" placeholder='****'>Please Enter a 4 digit OTP</input>
            </h1>
        </div>
    )
}

export default Login;
