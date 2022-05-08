import "./MyOrders.scss";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { ShoppingDataContext } from "../../../context/shoppingDataContext/ShoppingDataContext";
import { deleteShoppingData, getShoppingDatas } from "../../../context/shoppingDataContext/apiCalls";
import { DeleteOutline } from "@material-ui/icons";


export default function MyOrders() {
  const { shoppingdatas, dispatch } = useContext(ShoppingDataContext);

  useEffect(() => {
    getShoppingDatas(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteShoppingData(id, dispatch);
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 120,
    },
    {
      field: "name",
      headerName: "Custormer Name",
      width: 200,
    },
    {
      field: "contactNum",
      headerName: "Contact Number",
      width: 220,
    },
    {
      field: "addresl1",
      headerName: "Address Line 1",
      width: 120,
    },
    {
      field: "addresl2",
      headerName: "Address Line 2",
      width: 200,
    },
    {
      field: "addresl3",
      headerName: "Address Line 3",
      width: 150,
    },
    {
      field: " ",
      headerName: "Price",
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
                pathname: "/shoppingdata/" + params.row._id,
                deliver: params.row,
              }}
            >
              <button className="dOrdersListAssign">Edit</button>
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
    <div className="MORDContainer">
      <div className="MORDHeader">
        <Link to="/delivery-order-list" className="link">
          <span className="MORDTitle">Order Summary Report</span>
        </Link>
      </div>

      <div className="dOrdersList">
        <DataGrid
          rows={shoppingdatas}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          getRowId={(r) => r._id}
        />
      </div>
    </div>
  );
}
