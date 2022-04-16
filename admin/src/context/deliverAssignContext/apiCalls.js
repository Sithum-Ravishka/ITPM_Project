import axios from "axios";
import {
  createDeliverAssignFailure,
  createDeliverAssignStart,
  createDeliverAssignSuccess,
  deleteDeliverAssignFailure,
  deleteDeliverAssignStart,
  deleteDeliverAssignSuccess,
  getDeliverAssingsFailure,
  getDeliverAssingsStart,
  getDeliverAssingsSuccess,
  updateDeliverAssignFailure,
  updateDeliverAssignStart,
  updateDeliverAssignSuccess,
} from "./DeliverAssignActions";

export const getDeliverAssings = async (dispatch) => {
  dispatch(getDeliverAssingsStart());
  try {
    const res = await axios.get("/deliverassigns", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getDeliverAssingsSuccess(res.data));
  } catch (err) {
    dispatch(getDeliverAssingsFailure());
  }
};

//create
export const createDeliverAssign = async (deliver, dispatch) => {
  dispatch(createDeliverAssignStart());
  try {
    const res = await axios.post("/deliverassigns", deliver, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createDeliverAssignSuccess(res.data));
  } catch (err) {
    dispatch(createDeliverAssignFailure());
  }
};

//delete
export const deleteDeliverAssign = async (id, dispatch) => {
  dispatch(deleteDeliverAssignStart());
  try {
    await axios.delete("/deliverassigns/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteDeliverAssignSuccess(id));
  } catch (err) {
    dispatch(deleteDeliverAssignFailure());
  }
};

//update
export const updateDeliverAssign = async (id, dispatch) => {
  dispatch(updateDeliverAssignStart());
  try {
    await axios.put("/deliverassigns/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateDeliverAssignSuccess(id));
  } catch (err) {
    dispatch(updateDeliverAssignFailure());
  }
};
