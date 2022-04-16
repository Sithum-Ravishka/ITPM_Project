import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ShoppinCart.scss";
import { createShoppingData } from "../../../context/shoppingDataContext/apiCalls";
import { ShoppingDataContext } from "../../../context/shoppingDataContext/ShoppingDataContext";
const ShoppingCart = () => {
  
  const navigate = useNavigate();

  const [shoppingdata, setShoppingData] = useState(null);


  const { dispatch } = useContext(ShoppingDataContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setShoppingData({ ...shoppingdata, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createShoppingData(shoppingdata, dispatch);
    navigate("/add-card-details");
  };
  return (
    
    <div className="SPCContainer">
      <form>
      <div className="SPCTitle">Add Shipping Information</div>

      <div className="S_content">
        
        <div className="contactDetails">
          <span className="name">Contact Details</span>
          <div className="cd_input">
            <input type="text" name="name" onChange={handleChange} placeholder="Name*" />
            <input type="text" name="contactNum" onChange={handleChange} placeholder="Contact Number*"/>
          </div>

          <div className="addrssDetails">
            <span className="name">Address Details</span>
     
            <div className="address_inputs">
              <input type="text" name="addresl1" onChange={handleChange} placeholder="Address Line 1*" />
              <input type="text" name="addresl2" onChange={handleChange} placeholder="Address Line 2*"/>
              <input type="text" name="addresl3" onChange={handleChange} placeholder="Address Line 3*" />
            </div>

            <div className="adress_input2">
              <input type="text" name="district" onChange={handleChange} placeholder="District*" />
              <input type="text" name="zipCode"  onChange={handleChange} placeholder="Zip Code*"/>
            </div>

            <div className="checkBox">
              <input type='checkbox'  />
              <span className="checkName">
                Save Details
              </span>
            </div>

            <div className="buttons">
              <Link to="/add-card-details">
                <button className="save" onClick={handleSubmit} >Save</button>
              </Link>
              <button type="reset" className="clear">Clear</button>
            </div>
          </div>
          
        </div>
      </div>
      </form>
    </div>
  );
};

export default ShoppingCart;
