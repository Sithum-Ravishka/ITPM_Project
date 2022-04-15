import axios from "axios";
import {
  createDeliveryUserFailure,
  createDeliveryUserStart,
  createDeliveryUserSuccess,
  getDeliveryUsersFailure,
  getDeliveryUsersStart,
  getDeliveryUsersSuccess,
} from "./DeliveryUserActions";

export const getDeliversUser = async (dispatch) => {
    dispatch(getDeliveryUsersStart());
    try {
      const res = await axios.get("/deliveryusers" , {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getDeliveryUsersSuccess(res.data));
    } catch (err) {
      dispatch(getDeliveryUsersFailure());
    }
};

//create
export const createDeliveryUser = async (deliveryuser, dispatch) => {
  dispatch(createDeliveryUserStart());
  try {
    const res = await axios.post("/deliveryusers", deliveryuser, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createDeliveryUserSuccess(res.data));
  } catch (err) {
    dispatch(createDeliveryUserFailure());
  }
};