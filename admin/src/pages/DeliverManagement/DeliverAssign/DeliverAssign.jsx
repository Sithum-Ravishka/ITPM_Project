import React, { useContext, useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
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
                <input
                  onChange={handleChange}
                  name="customerName"
                  id="customerName"
                  value={deliver.customerName}
                  placeholder={deliver.customerName}
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Address :</span>
                <textarea
                  onChange={handleChange}
                  name="address"
                  id="address"
                  value={deliver.address}
                  placeholder={deliver.address}
                  className="dAInputAddress"
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Zip Code :</span>
                <input
                  onChange={handleChange}
                  name="zipCode"
                  id="zipCode"
                  value={deliver.zipCode}
                  placeholder={deliver.zipCode}
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Mobile :</span>
                <input
                  onChange={handleChange}
                  name="mobile"
                  id="mobile"
                  value={deliver.mobile}
                  placeholder={deliver.mobile}
                />
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
              <input
                type="date"
                className="dRinput"
                name="deliveryDate"
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="dAsectionRight">
          <div className="dAProductDetails">
            <div className="dATI">
              <img
                src={deliver.productImg || product}
                onChange={handleChange}
                name="productImg"
                id="productImg"
                value={deliver.productImg}
                alt=""
                className="dAProImg"
              />
              <span className="dACTitle">Product Information</span>
            </div>
            <div className="dAInfo">
              <div className="dRInfobox">
                <span className="dAspan">Product Name :</span>
                <input
                  onChange={handleChange}
                  name="productName"
                  id="productName"
                  value={deliver.productName}
                  placeholder={deliver.productName}
                />
              </div>
              <span>.</span>
              <div className="dRInfobox">
                <span className="dAPaymentInfo">Payment Information</span>
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Payment Method :</span>
                <input
                  onChange={handleChange}
                  name="paymentMethod"
                  id="paymentMethod"
                  value={deliver.paymentMethod}
                  placeholder={deliver.paymentMethod}
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Price Per Unit :</span>
                <input
                  onChange={handleChange}
                  name="pricePerUnit"
                  id="pricePerUnit"
                  value={deliver.pricePerUnit}
                  placeholder={deliver.pricePerUnit}
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Quantity :</span>
                <input
                  onChange={handleChange}
                  name="Quantity"
                  id="Quantity"
                  value={deliver.Quantity}
                  placeholder={deliver.Quantity}
                />
              </div>
              <div className="dRInfobox">
                <span className="dAspan">Total Price :</span>
                <input
                  onChange={handleChange}
                  name="totalPrice"
                  id="totalPrice"
                  value={deliver.totalPrice}
                  placeholder={deliver.totalPrice}
                />
              </div>
            </div>
          </div>
          <div className="dABtn">
            <Link to="delivers">
            <button type="submit" onClick={handleSubmit}>
              ASSIGN TO DELIVER
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
