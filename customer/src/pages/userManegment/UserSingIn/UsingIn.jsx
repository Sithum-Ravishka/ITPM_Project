import React from "react";

import "./UsingIn.scss";

export default function UsingIn() {
  return (
    <div className="ULContainer">
      <div className="ulTitle">Sing In</div>

      <div className="UIContent">
        <div className="ULleft">
          <div className="Ulimg">
            < img src="https://m.economictimes.com/thumb/msid-75400974,width-1200,height-900,resizemode-4,imgsize-263695/1.jpg" alt=""/>
          </div>
        </div>

        <div className="ULright">
          <span>Sing IN</span>
          
          <div className="MIbox">
            <span>Email</span>
            <input type='email'/>

            <span>Password</span>
            <input type='password'/>

           <button>Login</button>

           <span>If you not rejesert ? <span>SING UP</span> </span>

          </div>

        </div>

      </div>
    </div>
  );
}
