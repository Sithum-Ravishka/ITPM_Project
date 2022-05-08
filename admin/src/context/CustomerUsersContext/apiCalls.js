import axios from "axios";
import {
  createCustomerUserFailure,
  createCustomerUserStart,
  createCustomerUserSuccess,
  getCustomerUsersFailure,
  getCustomerUsersStart,
  getCustomerUsersSuccess,
} from "./CustomerUserActions";

export const getCustomerUser = async (dispatch) => {
  dispatch(getCustomerUsersStart());
  try {
    const res = await axios.get("/customerusers", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getCustomerUsersSuccess(res.data));
  } catch (err) {
    dispatch(getCustomerUsersFailure());
  }
};

//create
export const createCustomerUser = async (customeruser, dispatch) => {
  dispatch(createCustomerUserStart());
  try {
    const res = await axios.post("/customerusers", customeruser, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createCustomerUserSuccess(res.data));
  } catch (err) {
    dispatch(createCustomerUserFailure());
  }
};
