import React from "react";
import { Link } from "react-router-dom";
import "./ShoppinCart.scss";

const Edit = () => {
  
  
  return (
    
    <div className="SPCContainer">
      <form>
      <div className="SPCTitle">Add Shipping Information</div>

      <div className="S_content">
        
        <div className="contactDetails">
          <span className="name">Contact Details</span>
          <div className="cd_input">
            <input type="text" name="name"  placeholder="Name*" />
            <input type="text" name="contactNum" placeholder="Contact Number*"/>
          </div>

          <div className="addrssDetails">
            <span className="name">Address Details</span>
     
            <div className="address_inputs">
              <input type="text" name="addresl1"  placeholder="Address Line 1*" />
              <input type="text" name="addresl2"  placeholder="Address Line 2*"/>
              <input type="text" name="addresl3"  placeholder="Address Line 3*" />
            </div>

            <div className="adress_input2">
              <input type="text" name="district"  placeholder="District*" />
              <input type="text" name="zipCode"   placeholder="Zip Code*"/>
            </div>

            <div className="checkBox">
              <input type='checkbox'  />
              <span className="checkName">
                Save Details
              </span>
            </div>

            <div className="buttons">
              <Link to="/add-card-details">
                <button className="save"  >Save and Continue</button>
              </Link>
              <button type="reset" className="clear">Cancel</button>
            </div>
          </div>
          
        </div>
      </div>
      </form>
    </div>
  );
};

export default Edit;
