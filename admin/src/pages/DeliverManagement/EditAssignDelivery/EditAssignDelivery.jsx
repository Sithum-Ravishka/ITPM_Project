import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./editAssignDelivery.scss";
import profile from "./profile.jpg";
import product from "./product.webp";
import axios from "axios";

export default function EditAssignDelivery() {
  const location = useLocation();
  const deliverassign = location.deliverassign;
   const history = useHistory();

  const [customerName, setCustomerName] = useState(
    deliverassign ? deliverassign.customerName : ""
  );
  const [address, setAddress] = useState(
    deliverassign ? deliverassign.address : ""
  );
  const [zipCode, setZipCode] = useState(
    deliverassign ? deliverassign.zipCode : ""
  );
  const [mobile, setMobile] = useState(
    deliverassign ? deliverassign.mobile : ""
  );
  const [productName, setProductName] = useState(
    deliverassign ? deliverassign.productName : ""
  );
  const [productImg, setProductImg] = useState(
    deliverassign ? deliverassign.productImg : ""
  );
  const [paymentMethod, setPaymentMethod] = useState(
    deliverassign ? deliverassign.paymentMethod : ""
  );
  const [pricePerUnit, setPricePerUnit] = useState(
    deliverassign ? deliverassign.pricePerUnit : ""
  );
  const [Quantity, setQuantity] = useState(
    deliverassign ? deliverassign.Quantity : ""
  );
  const [totalPrice, setTotalPrice] = useState(
    deliverassign ? deliverassign.totalPrice : ""
  );
  const [deliverName, setDeliverName] = useState(
    deliverassign ? deliverassign.deliverName : ""
  );
  const [deliverNIC, setDeliverNIC] = useState(
    deliverassign ? deliverassign.deliverNIC : ""
  );
  const [vechicleNo, setVechicleNo] = useState(
    deliverassign ? deliverassign.vechicleNo : ""
  );
  const [deliveryDate, setDeliveryDate] = useState(
    deliverassign ? deliverassign.deliveryDate : ""
  );

  useEffect(() => {
    if (deliverassign) {
      setCustomerName(deliverassign.customerName);
      setAddress(deliverassign.address);
      setZipCode(deliverassign.zipCode);
      setMobile(deliverassign.mobile);
      setProductName(deliverassign.productName);
      setProductImg(deliverassign.productImg);
      setPaymentMethod(deliverassign.paymentMethod);
      setPricePerUnit(deliverassign.pricePerUnit);
      setQuantity(deliverassign.Quantity);
      setTotalPrice(deliverassign.totalPrice);
      setDeliverName(deliverassign.deliverName);
      setDeliverNIC(deliverassign.deliverNIC);
      setVechicleNo(deliverassign.vechicleNo);
      setDeliveryDate(deliverassign.deliveryDate);
    } else {
      setCustomerName("");
      setAddress("");
      setZipCode("");
      setMobile("");
      setProductName("");
      setProductImg("");
      setPaymentMethod("");
      setPricePerUnit("");
      setQuantity("");
      setTotalPrice("");
      setDeliverName("");
      setDeliverNIC("");
      setVechicleNo("");
      setDeliveryDate("");
    }
  }, [
    deliverassign,
    setCustomerName,
    setAddress,
    setZipCode,
    setMobile,
    setProductName,
    setProductImg,
    setPaymentMethod,
    setPricePerUnit,
    setQuantity,
    setTotalPrice,
    setDeliverName,
    setDeliverNIC,
    setVechicleNo,
    setDeliveryDate,
  ]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      history.push("/delivery-assign-List");
      if (deliverassign) {
        await axios.put(
          "http://localhost:8800/api/deliverassigns/" + deliverassign._id,
          {
            customerName,
            address,
            zipCode,
            mobile,
            productName,
            productImg,
            paymentMethod,
            pricePerUnit,
            Quantity,
            totalPrice,
            deliverName,
            deliverNIC,
            vechicleNo,
            deliveryDate,
          }
        );
      }
    },
    [
      deliverassign,
      customerName,
      address,
      zipCode,
      mobile,
      productName,
      productImg,
      paymentMethod,
      pricePerUnit,
      Quantity,
      totalPrice,
      deliverName,
      deliverNIC,
      vechicleNo,
      deliveryDate,
    ]
  );

  return (
    <div className="dAContainer">
      <div className="dAHeader">
        <Link to="/deliver-register" className="link">
          <span className="dATitle">Order Assign Page</span>
        </Link>
      </div>
      <form onSubmit={onSubmit}>
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
                    name="customerName"
                    id="customerName"
                    value={deliverassign.customerName}
                    placeholder={deliverassign.customerName}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Address :</span>
                  <textarea
                    name="address"
                    id="address"
                    value={deliverassign.address}
                    placeholder={deliverassign.address}
                    className="dAInputAddress"
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Zip Code :</span>
                  <input
                    name="zipCode"
                    id="zipCode"
                    value={deliverassign.zipCode}
                    placeholder={deliverassign.zipCode}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Mobile :</span>
                  <input
                    name="mobile"
                    id="mobile"
                    value={deliverassign.mobile}
                    placeholder={deliverassign.mobile}
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
                  placeholder={deliverassign.deliverName}
                  className="dRinput"
                  name="deliverName"
                  onChange={(e) => setDeliverName(e.target.value)}
                  required
                />
              </div>
              <div className="dRInputBox">
                <label className="dRLableName">Deliver NIC :</label>
                <input
                  type="text"
                  placeholder={deliverassign.deliverNIC}
                  className="dRinput"
                  name="deliverNIC"
                  onChange={(e) => setDeliverNIC(e.target.value)}
                  required
                />
              </div>
              <div className="dRInputBox">
                <label className="dRLableName">Vechicle No :</label>
                <input
                  type="text"
                  placeholder={deliverassign.vechicleNo}
                  className="dRinput"
                  name="vechicleNo"
                  onChange={(e) => setVechicleNo(e.target.value)}
                  required
                />
              </div>
              <div className="dRInputBox">
                <label className="dRLableName">Delivery Date :</label>
                <input
                  type="date"
                  className="dRinput"
                  name="deliveryDate"
                  placeholder={deliverassign.deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  required
                />
                <span className="datespan">{deliverassign.deliveryDate}</span>
              </div>
            </div>
          </div>
          <div className="dAsectionRight">
            <div className="dAProductDetails">
              <div className="dATI">
                <img
                  src={deliverassign.productImg || product}
                  name="productImg"
                  id="productImg"
                  value={deliverassign.productImg}
                  alt=""
                  className="dAProImg"
                />
                <span className="dACTitle">Product Information</span>
              </div>
              <div className="dAInfo">
                <div className="dRInfobox">
                  <span className="dAspan">Product Name :</span>
                  <input
                    name="productName"
                    id="productName"
                    value={deliverassign.productName}
                    placeholder={deliverassign.productName}
                  />
                </div>
                <span>.</span>
                <div className="dRInfobox">
                  <span className="dAPaymentInfo">Payment Information</span>
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Payment Method :</span>
                  <input
                    name="paymentMethod"
                    id="paymentMethod"
                    value={deliverassign.paymentMethod}
                    placeholder={deliverassign.paymentMethod}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Price Per Unit :</span>
                  <input
                    name="pricePerUnit"
                    id="pricePerUnit"
                    value={deliverassign.pricePerUnit}
                    placeholder={deliverassign.pricePerUnit}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Quantity :</span>
                  <input
                    name="Quantity"
                    id="Quantity"
                    value={deliverassign.Quantity}
                    placeholder={deliverassign.Quantity}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Total Price :</span>
                  <input
                    name="totalPrice"
                    id="totalPrice"
                    value={deliverassign.totalPrice}
                    placeholder={deliverassign.totalPrice}
                  />
                </div>
              </div>
            </div>
            <div className="dABtn">
              <button type="submit">RE-ASSIGN TO DELIVER</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
