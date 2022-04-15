import React from "react";
import './AddCartDetails.scss';
import cardLogo from './CreditCards.png';

const AddCardDetails = () => {
  return (
    <div className="CRDContainer">
      <div className="CRDTitle">Add Card Details</div>

      <div className="S_content">
        <div className="contactDetails">
          <span className="name">Cdit/Debit Card</span>
          <img className='image' src={cardLogo} alt="BigCo Inc. logo"/>
          
          <div className="cd_input">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Name*" />
          </div>

          <div className="addrssDetails">
            <span className="name"></span>

            <div className="address_inputs">
              <select className="dropdown">
                  <option>Select</option>
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
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
              </select>
              <input type="text" placeholder="Year*" />
              <input type="text" placeholder="CVV*" />
            </div>

            <div className="checkBox">
              <div className="checkdev">

              <input type='checkbox'  />
              <span className="checkName">
                Save Details
              </span>
              </div>
              
              
              <button className="save">Save</button>
              <button className="clear">Clear</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCardDetails;
