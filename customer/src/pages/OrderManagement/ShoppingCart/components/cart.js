import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import remove from './1.png'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      <div className="cartBox">
        <div className="colBox">
        <div className="colNames">
          <span>Description</span>  
          <span>Quantity</span>
          <span>Remove</span>
          <span>Price</span>
        </div>
        <div className="box">
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div className="addSub">
            <button  className="addSub" onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button className="addSub" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
          <button onClick={() => handleRemove(item.id)}><img src={remove} className="removecart" alt="remve" /></button>
            <span>{item.price}</span>
            
          </div>
        </div>
      ))}
      </div>
      
      </div>
      <div className="buyNow">
      <div className="total">
        <span>Total: Rs {price}</span>
      </div>

      <div className="yourInfo">
        <div className="paymentName">Payment options</div>
        <form>
          <div className="v">
          <div> <input type="radio" value="cash" name="option"/> Cash </div>
            <br></br>
            <div><input type="radio" value="Card" name="option"/> Card </div>
            </div>
            <div className="btn">
            <Link to="/shoppingcart" className="link">
              <button className="btn1"type="submit">Pay Now</button>
            </Link>
            </div>
        </form> 
      </div>
      </div>
      </div>
    </article>
  );
};

export default Cart;
