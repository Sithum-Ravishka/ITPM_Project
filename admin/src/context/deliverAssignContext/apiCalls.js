import axios from "axios";
import {
  createDeliverAssignFailure,
  createDeliverAssignStart,
  createDeliverAssignSuccess,
  deleteDeliverAssignFailure,
  deleteDeliverAssignStart,
  deleteDeliverAssignSuccess,
  getDeliversAssignFailure,
  getDeliversAssignStart,
  getDeliversAssignSuccess,
  updateDeliverAssignFailure,
  updateDeliverAssignStart,
  updateDeliverAssignSuccess,
} from "./DeliverActions";

export const getDeliversAssign = async (dispatch) => {
    dispatch(getDeliversAssignStart());
    try {
      const res = await axios.get("/deliverassigns" , {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getDeliversAssignSuccess(res.data));
    } catch (err) {
      dispatch(getDeliversAssignFailure());
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

