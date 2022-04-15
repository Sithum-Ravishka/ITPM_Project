import React from "react";
import { Link } from "react-router-dom";
import "./ShoppinCart.scss";
const ShoppingCart = () => {
  
  return (
    <div className="SPCContainer">
      <div className="SPCTitle">Add Shipping Information</div>

      <div className="S_content">
        <div className="contactDetails">
          <span className="name">Contact Details</span>
          <div className="cd_input">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Contact Number*"/>
          </div>

          <div className="addrssDetails">
            <span className="name">Address Details</span>

            <div className="address_inputs">
              <input type="text" placeholder="Address Line 1*" />
              <input type="text" placeholder="Address Line 2*"/>
              <input type="text" placeholder="Address Line 3*" />
            </div>

            <div className="adress_input2">
              <input type="text" placeholder="District*" />
              <input type="text" placeholder="Zip Code*"/>
            </div>

            <div className="checkBox">
              <input type='checkbox'  />
              <span className="checkName">
                Save Details
              </span>
            </div>

            <div className="buttons">
              <Link to="/add-card-details">
                <button className="save">Save</button>
              </Link>
              <button className="clear">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
