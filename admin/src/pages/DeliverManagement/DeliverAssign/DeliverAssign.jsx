import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./deliverAssign.scss";
import profile from "./profile.jpg";
import product from "./product.webp";
import { useContext } from "react";
import { DeliverContext } from "../../../context/deliverContext/DeliverContext";
import { useState } from "react";

export default function DeliverAssign() {
  const Navigate = useNavigate();
  const deliver = Navigate.deliver;

  const [updatedeliver, setUpdateDeliver] = useState(null);
  
  const { dispatch } = useContext(DeliverContext);


  const handleChange = (e) => {
    const value = e.target.value;
    setUpdateDeliver({ ...updatedeliver, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatedeliver(updatedeliver, dispatch);
  };

  return (
    <div className="dAContainer">
      <div className="dAHeader">
        <Link to="/deliver-register" className="link">
          <span className="dATitle">Order Assign Page</span>
        </Link>
      </div>
      <div className="dASection">
        <div className="dASectionLeft">
          <div className="dAcustomerDetails">
            <div className="dATI">
              <img src={profile} alt="" className="dAProImg" />
              <span className="dACTitle">Customer Information</span>
            </div>
            <div className="dAInfo">
              <div className="dRInfobox">
                <span className="dAspan">{deliver.customerName}</span>
                <input placeholder="Sithum Ravishka" disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Address :</span>
                <textarea
                  placeholder="No: 22, daramapalagama, iddagoda, mathugma, kaluthra, watersn province, Sri lanka."
                  disabled
                  className="dAInputAddress"
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Zip Code :</span>
                <input placeholder="12100" disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Mobile :</span>
                <input placeholder="076-8367257" disabled />
              </div>
            </div>
          </div>

          <div className="dADeliverDetails">
            <div className="dATI">
              <img src={profile} alt="" className="dADeliIcon" />
              <span className="dACTitle">Deliver Details</span>
            </div>
            <div className="dRInputBox">
              <label className="dRLableName">Deliver Name :</label>
              <input
                type="text"
                placeholder="Enter Deliver Name"
                className="dRinput"
                required
              />
            </div>
            <div className="dRInputBox">
              <label className="dRLableName">Deliver NIC :</label>
              <input
                type="text"
                placeholder="Enter Deliver NIC"
                className="dRinput"
                required
              />
            </div>
            <div className="dRInputBox">
              <label className="dRLableName">Vechicle No :</label>
              <input
                type="text"
                placeholder="Enter Vechicle No"
                className="dRinput"
                required
              />
            </div>
            <div className="dRInputBox">
              <label className="dRLableName">Delivery Date :</label>
              <input type="date" className="dRinput" required />
            </div>
          </div>
        </div>
        <div className="dAsectionRight">
          <div className="dAProductDetails">
            <div className="dATI">
              <img src={product} alt="" className="dAProImg" />
              <span className="dACTitle">Product Information</span>
            </div>
            <div className="dAInfo">
              <div className="dRInfobox">
                <span className="dAspan">Product Name :</span>
                <input placeholder="Lay's Potato Chips" disabled />
              </div>
              <span>.</span>
              <div className="dRInfobox">
                <span className="dAPaymentInfo">Payment Information</span>
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Payment Method :</span>
                <input placeholder="Cash on delivery" disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Price Per Unit :</span>
                <input placeholder="Rs.300.00" disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Quantity :</span>
                <input placeholder="12" disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Total Price :</span>
                <input placeholder="Rs.6000.00" disabled />
              </div>
            </div>
          </div>
          <div className="dABtn">
            <button>ASSIGN TO DELIVER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
