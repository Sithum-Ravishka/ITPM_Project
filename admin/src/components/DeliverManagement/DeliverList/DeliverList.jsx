import React from 'react'

import "./deliverList.scss"

export default function DeliverList() {
  return (
    <div className="deliverSm">
      <span className="deliverSmTitle">Recent Join Delivers</span>
      <span className="deliverSmSeeAll">See All {'>>'}</span>
      <ul className="deliverSmList">
          <li className="deliverSmListItem">
            <img
              src={
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
              alt=""
              className="deliverSmImg"
            />
            <div className="deliverSmUser">
              <span className="deliverSmUsername">Shenali Kavaya</span>
              <span className="deliverSmUsername">076-8213134</span>
            </div>
          </li>
      </ul>
    </div>
  )
}
