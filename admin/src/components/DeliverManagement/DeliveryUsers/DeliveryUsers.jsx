import React, { useEffect, useState } from 'react'
import axios from "axios";

import "./deliveryUsers.scss"

export default function DeliveryUsers() {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/deliveryusers?new=true", {
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
    <div className="deliverSm">
      <span className="deliverSmTitle">Recent Join Delivery Users</span>
      <span className="deliverSmSeeAll">See All {'>>'}</span>
      <ul className="deliverSmList">
                {newUsers.map((user) => (
          <li className="deliverSmListItem">
            <img
              src={
                user.deliverPhoto ||
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
              alt=""
              className="deliverSmImg"
            />
            <div className="deliverSmUser">
              <span className="deliverSmUsername">{user.firstName} {user.lastName}</span>
              <span className="deliverSmUsername">{user.contactNumber}</span>
            </div>
          </li>
                ))}
      </ul>
    
    </div>
  )
}
