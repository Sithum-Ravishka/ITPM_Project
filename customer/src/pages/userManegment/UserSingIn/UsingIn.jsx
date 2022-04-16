import React from "react";

import "./UsingIn.scss";

import singin from './singin.webp'

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
            <span>Email</span>
            <input type='email' placeholder="ex: email@gmai.com"/>

            <span className="ABC">Password</span>
            <input type='password'  placeholder="Password"/>

           <button className="BTN">Login</button>

           <span className="Up">If You Not Register ? <span className="UpS">SING UP</span> </span>

          </div>

        </div>

      </div>
    </div>
  );
}
