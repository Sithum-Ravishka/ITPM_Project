import "./UserList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { DeleteOutline } from "@material-ui/icons";
import {CustomerUserContext } from "../../../context/CustomerUsersContext/CustomerUserContext";
import { getCustomerUser } from "../../../context/CustomerUsersContext/apiCalls";

export default function UserList() {
  const { customerusers, dispatch } = useContext(CustomerUserContext);

  useEffect(() => {
    getCustomerUser(dispatch);
  }, [dispatch]);

  /*const handleDelete = (id) => {
    deleteDeliverAssign(id, dispatch);
  };*/

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "firstName",
      headerName: "Custormer Name",
      width: 200,
    },
    {
      field: "lastName",
      headerName: "Address",
      width: 200,
    },
    {
      field: "userName",
      headerName: "Deliver Name",
      width: 120,
    },
    {
      field: "dateOfBirth",
      headerName: "Contact Number",
      width: 200,
    },
    {
      field: "streetAddress",
      headerName: "Product Name",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/deliverassign/" + params.row._id,
                deliverassign: params.row,
              }}
            >
              <button className="dOrdersListAssign">Edit Assign Deliver</button>
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
          <span className="dRMTitle">Assign Order List for Deliver</span>
        </Link>
      </div>

      <div className="dOrdersList">
        <DataGrid
          rows={customerusers}
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
