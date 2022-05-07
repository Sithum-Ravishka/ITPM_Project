import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./deliveryOrders.scss";

export default function DeliveryOrders() {

  
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/delivers/sort?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTRjZGVhMTI0N2MwNDA1Yzc0YWRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjQwNzU3MX0.6fs6dcftyS3X7I_rm736r-OX9Ef4aewQWJ5Mea1o2zA",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  

  return (
    <div className="dOrderSm">
      <span className="dOrderSmTitle">Order List for Assign Deliver</span>
      <Link to="/delivers" className="link">
        <span className="dOrderSmSeeAll">See All {">>"}</span>
      </Link>
      <ul className="dOrderSmList">
      {newUsers.map((user) => (
        <li className="dOrderSmListItem">
          <img
            src={ user.productImg || "https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"}
            alt=""
            className="dOrderSmProImg"
          />
          <div className="dOrderSmProduct">
            <span className="dOrderSmProductname">{user.productName}</span>
            <span className="dOrderSmProductname">Rs.{user.pricePerUnit}</span>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}
