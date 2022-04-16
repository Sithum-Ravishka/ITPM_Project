import React from 'react'
import './OrderSuccess.scss';
import SucessLogo from './1.png';

export const OrderSuccess = () => {
  return (
    <div className="ORDContainer">
      <form>
      <div className="S_content">
        <img className='image' src={SucessLogo} alt="successLogo"/>
        <div className='orderSUCCESS'>
             <span>Order Successfull</span>
        </div>
        <div className='orderID'>
             <span>Order ID</span>
        </div>
        <div className='orderThankyou'>
             <span>Thank You So Much For Dealing With Us.</span>
        </div>
             <button className='btn'>My Orders</button>
      </div>
      
      </form>
  </div>
  )
}
export default OrderSuccess;