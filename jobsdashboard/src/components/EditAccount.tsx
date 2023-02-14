import React from "react";
import { ReactDOM } from "react";

interface Props {
    email: string;
    name: String;
    profession: String;
    phoneNumber: Number;
}

const EditAcc = (props : Props) => {
    return(
        <div>
            <h1>
                Edit Account
            </h1>
            <input type="text" placeholder={props.email}></input>

        </div>
    )
}

export default EditAcc;