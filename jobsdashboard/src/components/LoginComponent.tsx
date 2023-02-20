import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

const Login = () => {
    const [LogStatus, updateLogStatus] = useState({
        email: '',
        otp: ''
    })
    
    const handlechange = (e : Event) => {
        updateLogStatus(LogStatus)
    };

    const handleSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Email" />
                <input type="number" placeholder="Enter otp" />
                <button type="submit" value="Continue"/>
            </form>
        </div>
    )
}
export default Login;