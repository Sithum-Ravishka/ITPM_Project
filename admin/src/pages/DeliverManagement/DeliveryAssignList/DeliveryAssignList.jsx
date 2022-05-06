import "./deliveryAssignList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { DeliverAssignContext } from "../../../context/deliverAssignContext/DeliverAssignContext";
import { deleteDeliverAssign, getDeliverAssings } from "../../../context/deliverAssignContext/apiCalls";

export default function DeliveryOrderList() {
  const { deliverassigns, dispatch } = useContext(DeliverAssignContext);

  useEffect(() => {
    getDeliverAssings(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteDeliverAssign(id, dispatch);
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "customerName",
      headerName: "Custormer Name",
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "deliverName",
      headerName: "Deliver Name",
      width: 120,
    },
    {
      field: "mobile",
      headerName: "Contact Number",
      width: 200,
    },
    {
      field: "productName",
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
                pathname: "/deliverassigns/" + params.row._id,
                deliver: params.row,
              }}
            >
              <button className="dOrdersListAssign">Assign To Deliver</button>
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
          <span className="dRMTitle">Assign Order List for Deliver</span>
        </Link>
      </div>

      <div className="dOrdersList">
        <DataGrid
          rows={deliverassigns}
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
