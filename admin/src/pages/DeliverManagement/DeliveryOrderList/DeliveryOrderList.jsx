import "./deliveryOrderList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DeliveryOrderList() {
  const [data] = useState(productRows);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 120,
    },
    {
      field: "custormerName",
      headerName: "Custormer Name",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      width: 220,
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      width: 120,
    },
    {
      field: "productName",
      headerName: "Product Name",
      width: 200,
    },
    {
      field: "orderPrice",
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
            <Link to={"/delivery-assign/" + params.row.id}>
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
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          checkboxSelection
        />
      </div>
    </div>
  );
}
