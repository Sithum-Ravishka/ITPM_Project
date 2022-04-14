import axios from "axios";
import {
  createDeliverFailure,
  createDeliverStart,
  createDeliverSuccess,
  deleteDeliverFailure,
  deleteDeliverStart,
  deleteDeliverSuccess,
  getDeliversFailure,
  getDeliversStart,
  getDeliversSuccess,
  updateDeliverFailure,
  updateDeliverStart,
  updateDeliverSuccess,
} from "./DeliverActions";

export const getDelivers = async (dispatch) => {
    dispatch(getDeliversStart());
    try {
      const res = await axios.get("/delivers" , {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getDeliversSuccess(res.data));
    } catch (err) {
      dispatch(getDeliversFailure());
    }
};

//create
export const createDeliver = async (deliver, dispatch) => {
  dispatch(createDeliverStart());
  try {
    const res = await axios.post("/delivers", deliver, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createDeliverSuccess(res.data));
  } catch (err) {
    dispatch(createDeliverFailure());
  }
};

//delete
export const deleteDeliver = async (id, dispatch) => {
  dispatch(deleteDeliverStart());
  try {
    await axios.delete("/delivers/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteDeliverSuccess(id));
  } catch (err) {
    dispatch(deleteDeliverFailure());
  }
};

//update
export const updateDeliver = async (id, dispatch) => {
  dispatch(updateDeliverStart());
  try {
    await axios.put("/delivers/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateDeliverSuccess(id));
  } catch (err) {
    dispatch(updateDeliverFailure());
  }
};

