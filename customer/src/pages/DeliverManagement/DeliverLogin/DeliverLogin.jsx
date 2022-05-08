import React from "react";
import "./deliverLogin.scss";
import Dlogin from './DLogin.png'
import { Link } from "react-router-dom";


export default function DeliverLogin() {



  return (
    <div className="DLContainer">
      <div className="UIContent">
        <div className="ULleft">
          <div className="Ulimg">
            < img src={Dlogin} alt=""/>
          </div>
        </div>

        <div className="ULright">
          <span className="title">DELIVER SIGN IN</span>

          <div className="DLgnbox">
            <span>NIC Number <span className='Star'>*</span></span>
            <input type='text' placeholder="Enter Your NIC Number"/>

            <span className="pass">Password <span className='Star'>*</span></span>
            <input type='password'  placeholder="Password"/>

          <Link to="/deliver-profile"><button className="DLbtn">SIGN IN</button></Link> 

           <span className="Up">If Your Froget Password ? </span>

          </div>

        </div>

      </div>
    </div>
  );
}
