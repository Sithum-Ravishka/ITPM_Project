import React from "react";
import { Link } from "react-router-dom";

import "./dAssignOrders.scss";

export default function DAssignOrders() {
  return (
    <div className="dAssignSm">
      <span className="dAssignSmTitle">Assign List for Deliver</span>
      <Link to="./delivery-assign-List" className="link">
        <span className="dAssignSmSeeAll">See All {">>"}</span>
      </Link>
      <ul className="dAssignSmList">
        <li className="dAssignSmListItem">
          <img
            src={"https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"}
            alt=""
            className="dAssignSmProImg"
          />
          <div className="dAssignSmProduct">
            <span className="dAssignSmProductname">Cheez-It-Crackers</span>
            <span className="dAssignSmProductname">Rs.180.00</span>
          </div>
        </li>
      </ul>
      <ul className="dAssignSmList">
        <li className="dAssignSmListItem">
          <img
            src={"https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"}
            alt=""
            className="dAssignSmProImg"
          />
          <div className="dAssignSmProduct">
            <span className="dAssignSmProductname">Cheez-It-Crackers</span>
            <span className="dAssignSmProductname">Rs.180.00</span>
          </div>
        </li>
      </ul>
      <ul className="dAssignSmList">
        <li className="dAssignSmListItem">
          <img
            src={"https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"}
            alt=""
            className="dAssignSmProImg"
          />
          <div className="dAssignSmProduct">
            <span className="dAssignSmProductname">Cheez-It-Crackers</span>
            <span className="dAssignSmProductname">Rs.180.00</span>
          </div>
        </li>
      </ul>
      <ul className="dAssignSmList">
        <li className="dAssignSmListItem">
          <img
            src={"https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"}
            alt=""
            className="dAssignSmProImg"
          />
          <div className="dAssignSmProduct">
            <span className="dAssignSmProductname">Cheez-It-Crackers</span>
            <span className="dAssignSmProductname">Rs.180.00</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
