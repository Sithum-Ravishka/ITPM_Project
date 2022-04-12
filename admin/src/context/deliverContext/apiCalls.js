import axios from "axios";
import {
  getDeliversFailure,
  getDeliversStart,
  getDeliversSuccess,
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