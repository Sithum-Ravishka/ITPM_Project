import "./UserList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { DeleteOutline } from "@material-ui/icons";
import {CustomerUserContext } from "../../../context/CustomerUsersContext/CustomerUserContext";
import { deleteCustomerUsers, getCustomerUser } from "../../../context/CustomerUsersContext/apiCalls";

export default function UserList() {
  const { customerusers, dispatch } = useContext(CustomerUserContext);

  useEffect(() => {
    getCustomerUser(dispatch);
  }, [dispatch]);

    const handleDelete = (id) => {
    deleteCustomerUsers(id, dispatch);
  }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "firstName",
      headerName: "Fist Name",
      width: 200,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 200,
    },
    {
      field: "lastName",
      headerName: "Address",
      width: 200,
    },
    {
      field: "userName",
      headerName: "User Name",
      width: 120,
    },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      width: 200,
    },
    {
      field: "streetAddress",
      headerName: "Street Address",
      width: 150,
    },
    {
      field: "streetAddress2",
      headerName: "Street Address2",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
    {
      field: "state",
      headerName: "State/Province",
      width: 150,
    },
    {
      field: "postId",
      headerName: "Porst Code",
      width: 150,
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      width: 150,
    },
    {
      field: "gender",
      headerName: "Gender",
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
                pathname: "/customeruser/" + params.row._id,
                customeruser: params.row,
              }}
            >
              <button className="dOrdersListAssign">Edit Customer</button>
            </Link>

            <DeleteOutline
              className="assignDelete"
              onClick={() => handleDelete(params.row._id)}
            />
           
          </>
        );
      },
    },
  ];

  return (
    <div className="dordersContainer">
      <div className="dRHeader">
        <Link to="/delivery-order-list" className="link">
          <span className="dRMTitle">Details For Customers</span>
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
