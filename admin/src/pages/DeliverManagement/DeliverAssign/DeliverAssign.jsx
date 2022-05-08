import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./deliverAssign.scss";
import profile from "./profile.jpg";
import product from "./product.webp";
import axios from "axios";

export default function DeliverAssign() {
  const location = useLocation();
  const deliver = location.deliver;
  const history = useHistory();

  const [customerName, setCustomerName] = useState(deliver.customerName);
  const [address, setAddress] = useState(deliver.address);
  const [zipCode, setZipCode] = useState(deliver.zipCode);
  const [mobile, setMobile] = useState(deliver.mobile);
  const [productName, setProductName] = useState(deliver.productName);
  const [productImg, setProductImg] = useState(deliver.productImg);
  const [paymentMethod, setPaymentMethod] = useState(deliver.paymentMethod);
  const [pricePerUnit, setPricePerUnit] = useState(deliver.pricePerUnit);
  const [Quantity, setQuantity] = useState(deliver.Quantity);
  const [totalPrice, setTotalPrice] = useState(deliver.totalPrice);
  const [deliverName, setDeliverName] = useState();
  const [deliverNIC, setDeliverNIC] = useState();
  const [vechicleNo, setVechicleNo] = useState();
  const [deliveryDate, setDeliveryDate] = useState();

  useEffect(() => {
    setCustomerName(deliver.customerName);
    setAddress(deliver.address);
    setZipCode(deliver.zipCode);
    setMobile(deliver.mobile);
    setProductName(deliver.productName);
    setProductImg(deliver.productImg);
    setPaymentMethod(deliver.paymentMethod);
    setPricePerUnit(deliver.pricePerUnit);
    setQuantity(deliver.Quantity);
    setTotalPrice(deliver.totalPrice);
    setDeliverName("");
    setDeliverNIC("");
    setVechicleNo("");
    setDeliveryDate("");
  }, [
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
    deliver,
  ]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      history.push("/delivery-assign-List");
      await axios.post("http://localhost:8800/api/deliverassigns", {
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
      });
    },
    [
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
                    onChange={(e) => setCustomerName(e.target.value)}
                    name="customerName"
                    id="customerName"
                    value={deliver.customerName}
                    placeholder={deliver.customerName}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Address :</span>
                  <textarea
                    onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setZipCode(e.target.value)}
                    name="zipCode"
                    id="zipCode"
                    value={deliver.zipCode}
                    placeholder={deliver.zipCode}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Mobile :</span>
                  <input
                    onChange={(e) => setMobile(e.target.value)}
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
                  onChange={(e) => setDeliverName(e.target.value)}
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
                  onChange={(e) => setDeliverNIC(e.target.value)}
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
                  onChange={(e) => setDeliveryDate(e.target.value)}
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
                  onChange={(e) => setProductImg(e.target.value)}
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
                    onChange={(e) => setProductName(e.target.value)}
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
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    name="paymentMethod"
                    id="paymentMethod"
                    value={deliver.paymentMethod}
                    placeholder={deliver.paymentMethod}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Price Per Unit :</span>
                  <input
                    onChange={(e) => setPricePerUnit(e.target.value)}
                    name="pricePerUnit"
                    id="pricePerUnit"
                    value={deliver.pricePerUnit}
                    placeholder={deliver.pricePerUnit}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Quantity :</span>
                  <input
                    onChange={(e) => setQuantity(e.target.value)}
                    name="Quantity"
                    id="Quantity"
                    value={deliver.Quantity}
                    placeholder={deliver.Quantity}
                  />
                </div>
                <div className="dRInfobox">
                  <span className="dAspan">Total Price :</span>
                  <input
                    onChange={(e) => setTotalPrice(e.target.value)}
                    name="totalPrice"
                    id="totalPrice"
                    value={deliver.totalPrice}
                    placeholder={deliver.totalPrice}
                  />
                </div>
              </div>
            </div>
            <div className="dABtn">
              <button type="submit">ASSIGN TO DELIVER</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
