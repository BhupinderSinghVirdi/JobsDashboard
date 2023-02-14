import React from "react";
import ReactDOM from "react-dom";

interface Props {
  email: String;
}

const Del = (props: Props) => {
  return (
    <div id="DelComp">
      <p>Are you sure you want to delete your account?</p>
      <input>Select email or enter for confirmation mail.</input>
      <input type="checkbox">
        <span>{props.email}</span>
      </input>
        {/* insert logic for value of checkbox. */}
      <input type="text" placeholder="demo@domain.ca">
        Email
      </input>
      <div id="btn-grp">
      <button value="Confirm"></button>
      <button value="Cancel"></button>
      </div>
    </div>
  );
};

export default Del;
