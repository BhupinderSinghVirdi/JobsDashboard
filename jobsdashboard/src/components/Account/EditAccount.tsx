import React from "react";
import { ReactDOM } from "react";

interface Props {
    email: string;
    name: String;
    phoneNumber: Number;
}

const EditAcc = (props : Props) => {
    return(
        <div>
            <h1>
                Edit Account
            </h1>
            <span>Name:</span>
            <input></input>
            <span>Email:</span>
            <input type="text" placeholder={props.email}>Email</input>
            <span>Phone:</span>
            <input type="text" placeholder="**********">Phone</input>

        </div>
    )
}

export default EditAcc;