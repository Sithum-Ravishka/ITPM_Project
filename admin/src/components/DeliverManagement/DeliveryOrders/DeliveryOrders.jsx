import React from 'react'

import "./deliveryOrders.scss"

export default function DeliveryOrders() {
  return (
    <div className="dOrderSm">
      <span className="dOrderSmTitle">Order List for Deliver</span>
      <span className="dOrderSmSeeAll">See All {'>>'}</span>
      <ul className="dOrderSmList">
          <li className="dOrderSmListItem">
            <img
              src={
                "https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"
              }
              alt=""
              className="dOrderSmProImg"
            />
            <div className="dOrderSmProduct">
              <span className="dOrderSmProductname">Cheez-It-Crackers</span>
              <span className="dOrderSmProductname">Rs.180.00</span>
            </div>
          </li>
      </ul>
      <ul className="dOrderSmList">
          <li className="dOrderSmListItem">
            <img
              src={
                "https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"
              }
              alt=""
              className="dOrderSmProImg"
            />
            <div className="dOrderSmProduct">
              <span className="dOrderSmProductname">Cheez-It-Crackers</span>
              <span className="dOrderSmProductname">Rs.180.00</span>
            </div>
          </li>
      </ul>
      <ul className="dOrderSmList">
          <li className="dOrderSmListItem">
            <img
              src={
                "https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"
              }
              alt=""
              className="dOrderSmProImg"
            />
            <div className="dOrderSmProduct">
              <span className="dOrderSmProductname">Cheez-It-Crackers</span>
              <span className="dOrderSmProductname">Rs.180.00</span>
            </div>
          </li>
      </ul>
      <ul className="dOrderSmList">
          <li className="dOrderSmListItem">
            <img
              src={
                "https://m.media-amazon.com/images/I/71hCIHqDHNL._SL1500_.jpg"
              }
              alt=""
              className="dOrderSmProImg"
            />
            <div className="dOrderSmProduct">
              <span className="dOrderSmProductname">Cheez-It-Crackers</span>
              <span className="dOrderSmProductname">Rs.180.00</span>
            </div>
          </li>
      </ul>
    </div>
  )
}
