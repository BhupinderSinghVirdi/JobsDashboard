import React from "react";
import { ReactDOM } from "react";
// import JobsAppliedView from './ui/JobsAppliedView'
import Axios from 'axios';

interface Props{
    name: string;
    email: string;
    communication: String;
    notifications: Boolean;
    
};

const ReadAcc = (props:Props) => {
    return(
        <div>
            <p>Details of the user to be displayed here!</p>
        </div>
    )
}

export default ReadAcc;



