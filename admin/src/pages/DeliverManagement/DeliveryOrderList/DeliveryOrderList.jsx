import "./deliveryOrderList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { DeliverContext } from "../../../context/deliverContext/DeliverContext";
import {  getDelivers } from "../../../context/deliverContext/apiCalls";


export default function DeliveryOrderList() {
  const { delivers, dispatch } = useContext(DeliverContext);

  useEffect(() => {
    getDelivers(dispatch);
  }, [dispatch]);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 120,
    },
    {
      field: "deliver",
      headerName: "Deliver",
      width: 10,
    },
    {
      field: "customerName",
      headerName: "Custormer Name",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      width: 220,
    },
    {
      field: "mobile",
      headerName: "Contact Number",
      width: 120,
    },
    {
      field: "productName",
      headerName: "Product Name",
      width: 200,
    },
    {
      field: "totalPrice",
      headerName: "Order Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link 
              to={{ pathname: "/deliver/" + params.row._id, deliver: params.row }}>
              <button className="dOrdersListAssign">Assign To Deliver</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="dordersContainer">
      <div className="dRHeader">
        <Link to="/delivery-order-list" className="link">
          <span className="dRMTitle">Order List for Deliver</span>
        </Link>
      </div>

      <div className="dOrdersList">
        <DataGrid
          rows={delivers}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          checkboxSelection
          getRowId={(r) => r._id}
        />
      </div>
    </div>
  );
}
