import React from "react";

import "./UsingIn.scss";

import singin from './singin.webp'
import { Link } from "react-router-dom";

export default function UsingIn() {
  return (
    <div className="ULContainer">
      <div className="ulTitle"></div>

      <div className="UIContent">
        <div className="ULleft">
          <div className="Ulimg">
            < img src={singin} alt=""/>
          </div>
        </div>

        <div className="ULright">
          <span className="SInTitel">SIGN IN</span>

          <div className="MIbox">
            <span>Email <span className='Star'>*</span></span>
            <input type='email' placeholder="ex: email@gmai.com"/>

            <span className="ABC">Password <span className='Star'>*</span></span>
            <input type='password'  placeholder="Password"/>

          <Link to="/user-profile"><button className="BTN">Login</button></Link> 

           <span className="Up">If You Not Register ? <Link to="/user-register"> <span className="UpS">SING UP</span></Link> </span>

          </div>

        </div>

      </div>
    </div>
  );
}
