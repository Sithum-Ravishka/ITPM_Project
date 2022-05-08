import React, { useContext, useState } from "react";
import './AddCartDetails.scss';
import cardLogo from './CreditCards.png';
import { createCardData } from "../../../context/cardDataContext/apiCalls";
import { CardDataContext } from "../../../context/cardDataContext/CardDataContext";
import { useHistory } from "react-router-dom";

const AddCardDetails = () => {
  const navigate = useHistory();

  const [carddata, setCardData] = useState(null);


  const { dispatch } = useContext(CardDataContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setCardData({ ...carddata, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCardData(carddata, dispatch);
    navigate.push("/Order-success");
  };
  return (
    <div className="CRDContainer">
      <form>
      <div className="CRDTitle">Add Card Details</div>

      <div className="S_content">
        <div className="contactDetails">
          <span className="name">Cdit/Debit Card</span>
          <img className='image' src={cardLogo} alt="BigCo Inc. logo"/>
          
          <div className="cd_input">
            <input type="text" name="name" onChange={handleChange} placeholder="Name*" />
            <input type="text" name="cardNum" onChange={handleChange} placeholder="Card Number*" />
          </div>

          <div className="addrssDetails">
            <span className="name"></span>

            <div className="address_inputs">
              <select className="dropdown"  name="month" onChange={handleChange}>
                  <option>Month</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
              </select>
              <input type="text" name="year" onChange={handleChange} placeholder="Year*" />
              <input type="text" name="cvv" onChange={handleChange} placeholder="CVV*" />
            </div>

            <div className="checkBox">
              <div className="checkdev">

              <input type='checkbox'  />
              <span className="checkName">
                Save Details
              </span>
              </div>
              
              
              <button className="save" onClick={handleSubmit} >Save and Confirm</button>
              <button className="clear">Cancel</button>
              
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AddCardDetails;