import axios from "axios";
import {
  createDeliverUserFailure,
  createDeliverUserStart,
  createDeliverUserSuccess,
  getDeliversUserFailure,
  getDeliversUserStart,
  getDeliversUserSuccess,
} from "./DeliveryUserActions";

export const getDeliversUser = async (dispatch) => {
    dispatch(getDeliversUserStart());
    try {
      const res = await axios.get("/deliveryusers" , {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getDeliversUserSuccess(res.data));
    } catch (err) {
      dispatch(getDeliversUserFailure());
    }
};

//create
export const createDeliverUser = async (deliveryuser, dispatch) => {
  dispatch(createDeliverUserStart());
  try {
    const res = await axios.post("/deliveryusers", deliveryuser, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createDeliverUserSuccess(res.data));
  } catch (err) {
    dispatch(createDeliverUserFailure());
  }
};