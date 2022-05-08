import axios from "axios";
import {
  createCustomerUserFailure,
  createCustomerUserStart,
  createCustomerUserSuccess,
  getCustomerUsersFailure,
  getCustomerUsersStart,
  getCustomerUsersSuccess,
  deleteCustomerUsersStart,
  deleteCustomerUsersSuccess,
  deleteCustomerUsersFailure,

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
//delete
export const deleteCustomerUsers = async (id, dispatch) => {
  dispatch(deleteCustomerUsersStart());
  try {
    await axios.delete("/customerusers/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteCustomerUsersSuccess(id));
  } catch (err) {
    dispatch(deleteCustomerUsersFailure());
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
