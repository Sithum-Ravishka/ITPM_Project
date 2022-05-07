import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./dAssignOrders.scss";

export default function DAssignOrders() {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/deliverassigns/litile?new=true", {
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
    <div className="dAssignSm">
      <span className="dAssignSmTitle">Assign List for Deliver</span>
      <Link to="./delivery-assign-List" className="link">
        <span className="dAssignSmSeeAll">See All {">>"}</span>
      </Link>
      <ul className="dAssignSmList">
      {newUsers.map((user) => (
        <li className="dAssignSmListItem">
          <img
            src={ user.productImg || "https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"}
            alt=""
            className="dAssignSmProImg"
          />
          <div className="dAssignSmProduct">
            <span className="dAssignSmProductname">{user.productName}</span>
            <span className="dAssignSmProductname">Rs.{user.pricePerUnit}</span>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}
