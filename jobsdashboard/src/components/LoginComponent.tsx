import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

interface Props {
    email : string,
    verification: number
}

const Login = (props: Props) => {
    const [LogStatus, updateLogStatus] = useState()
    
    const handlechange = (e : Event) => {
        updateLogStatus(LogStatus)
    };

    return(
        <div>
            <p>login component for JobsDashboard</p>
        </div>
        // <div>
        //     {/* <form onSubmit={handlechange}>
        //         {/* <input 
        //             type='text'
        //             value=
                
        //         /> */}

        //     </form> */}
        // </div>
    )
}
