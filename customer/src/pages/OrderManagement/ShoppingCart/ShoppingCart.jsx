import React from "react";
import "./ShoppinCart.scss";
const ShoppingCart = () => {
  return (
    <div className="SPCContainer">
      <div className="SPCTitle">Add Shipping Information</div>

      <div className="S_content">
        <div className="contactDetails">
          <span>Contact Details</span>
          <div className="cd_input">
            <input type="text" placeholder="" />
            <input type="text" />
          </div>

          <div className="addrssDetails">
            <span>Address Details</span>

            <div className="address_inputs">
              <input type="text" placeholder="" />
              <input type="text" />
              <input type="text" placeholder="" />
            </div>

            <div className="adress_input2">
              <input type="text" placeholder="" />
              <input type="text" />
            </div>

            <div className="checkBox">
              <input type='checkbox'  />
              <span>
                Save Details
              </span>
            </div>

            <div className="buttons">
              <button>Save</button>
              <button>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
