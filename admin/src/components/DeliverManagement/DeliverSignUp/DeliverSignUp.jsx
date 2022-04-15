import React from "react";
import { Link } from "react-router-dom";

import "./deliverSignUp.scss";
import SignUp from "./SignUp.png";

export default function DeliverSignUp() {
  return (
    <div className="signupContainer">
      <div className="dRegSection">
        <img src={SignUp} alt="SignUp" className="signUpImg" />
        <div className="dRegSectionRight">
          <span className="dRegTitle">Deliver Register</span>
          <span className="dRegSubTitle">Click Here To Delivers</span>
          <span className="dRegSubTitle">Registation</span>
          <Link to="/deliver-register" className="link">
            <button className="dRegBtn">SIGN UP</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
