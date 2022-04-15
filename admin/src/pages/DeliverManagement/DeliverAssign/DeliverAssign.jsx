import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./deliverAssign.scss";
import profile from "./profile.jpg";
import product from "./product.webp";
import { createDeliverAssign } from "../../../context/deliverAssignContext/apiCalls";
import { DeliverAssignContext } from "../../../context/deliverAssignContext/DeliverAssignContext";

export default function DeliverAssign() {
  const location = useLocation();
  const deliver = location.deliver;

  const [deliverassign, setDeliverAssign] = useState(null);


  const { dispatch } = useContext(DeliverAssignContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setDeliverAssign({ ...deliverassign, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDeliverAssign(deliverassign, dispatch);
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
                <span className="dAspan">Customer Name :</span>
                <input placeholder={deliver.customerName} value={deliver.customerName} disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Address :</span>
                <textarea
                  placeholder={deliver.address}
                  disabled
                  className="dAInputAddress"
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Zip Code :</span>
                <input placeholder={deliver.zipCode} disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Mobile :</span>
                <input placeholder={deliver.mobile} name="mobile" value={deliver.mobile} onChange={handleChange} />
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
                name="deliverName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="dRInputBox">
              <label className="dRLableName">Deliver NIC :</label>
              <input
                type="text"
                placeholder="Enter Deliver NIC"
                className="dRinput"
                name="deliverNIC"
                onChange={handleChange}
                required
              />
            </div>
            <div className="dRInputBox">
              <label className="dRLableName">Vechicle No :</label>
              <input
                type="text"
                placeholder="Enter Vechicle No"
                className="dRinput"
                name="vechicleNo"
                onChange={handleChange}
                required
              />
            </div>
            <div className="dRInputBox">
              <label className="dRLableName">Delivery Date :</label>
              <input type="date" className="dRinput" name="deliveryDate" onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className="dAsectionRight">
          <div className="dAProductDetails">
            <div className="dATI">
              <img src={deliver.productImg || product} alt="" className="dAProImg" />
              <span className="dACTitle">Product Information</span>
            </div>
            <div className="dAInfo">
              <div className="dRInfobox">
                <span className="dAspan">Product Name :</span>
                <input placeholder={deliver.productName} disabled />
              </div>
              <span>.</span>
              <div className="dRInfobox">
                <span className="dAPaymentInfo">Payment Information</span>
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Payment Method :</span>
                <input placeholder={deliver.paymentMethod} disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Price Per Unit :</span>
                <input placeholder={deliver.pricePerUnit} disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Quantity :</span>
                <input placeholder={deliver.Quantity} disabled />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Total Price :</span>
                <input placeholder={deliver.totalPrice} disabled />
              </div>
            </div>
          </div>
          <div className="dABtn">
            <button type="submit" onClick={handleSubmit}>ASSIGN TO DELIVER</button>
          </div>
        </div>
      </div>
    </div>
  );
}