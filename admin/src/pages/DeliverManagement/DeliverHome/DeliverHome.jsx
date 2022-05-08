import React, { useEffect, useMemo, useState } from "react";
import DAssignOrders from "../../../components/DeliverManagement/DAssignOrders/DAssignOrders";
import DChart from "../../../components/DeliverManagement/DChart/DChart";
import DeliverSignUp from "../../../components/DeliverManagement/DeliverSignUp/DeliverSignUp";
import DeliveryOrders from "../../../components/DeliverManagement/DeliveryOrders/DeliveryOrders";
import DeliveryUsers from "../../../components/DeliverManagement/DeliveryUsers/DeliveryUsers";
import axios from "axios";
import "./deliverHome.scss";

export default function DeliverHome() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [assignStats, setAssignStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/deliverassigns/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTRjZGVhMTI0N2MwNDA1Yzc0YWRiMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjQwNzU3MX0.6fs6dcftyS3X7I_rm736r-OX9Ef4aewQWJ5Mea1o2zA",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setAssignStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Delivery Orders": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="DContainer">
      <div className="header">
        <span className="title">
          Welcome, <span className="subtitle">Admin</span>
        </span>
      </div>
      <DChart
        data={assignStats}
        title="Delivery Analytics"
        grid
        dataKey="Delivery Orders"
      />

      <div className="smLists">
        <DeliveryUsers />
        <DeliveryOrders />
        <DAssignOrders />
      </div>
      <div className="dRegSignUph">
        <DeliverSignUp />
      </div>
    </div>
  );
}
