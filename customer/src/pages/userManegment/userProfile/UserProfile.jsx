import React from "react";

import "./UserProfile.scss";
import bday from "./bday.jpeg";
import phone from "./phone.png";
import gen from "./gen.png";
import loc from "./loc.jpeg";
import email from "./email.jpeg";
import images from "./images.jpeg";

export default function UserProfile() {
  return (
    <div className="UPContainer">
      <div className="upTitle"></div>

      <div className="UpContent">
        <div className="UpSection1">
          <span className="UsName">Charith Dhananjaya</span>
          <img
            src={ images }
            alt=""
          />
        </div>

        <div className="UpSection2">
          <div className="UpItem">
            <img src={bday} alt="" />
            <span>1998.03.26</span>
          </div>

          <div className="UpItem">
            <img src={gen} alt="" />
            <span>Male</span>
          </div>

          <div className="UpItem">
            <img src={phone} alt="" />
            <span>077 2326538</span>
          </div>

          <div className="UpItem">
            <img src={email} alt="" />
            <span>lassanalanka@gmail.com</span>
          </div>
        </div>

        <div className="UpSection3">
          <div className="UpItem">
            <img src={loc} alt="" />
            <span>Fair Road</span>
          </div>
          <div className="cha">
          <div className="UpItem">
          <span>Nochchiyagama</span>
          </div>
          <div className="UpItem">
          <span>North Central</span>
          </div>
          <div className="UpItem">
          <span>50200</span>
          </div>
          </div>
          <button className="BTN">My Order</button>
          <div className="UpButton">
            <button className="NTS1">Edit</button>
            <button className="NTS2">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
