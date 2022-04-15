import axios from "axios";
import {
  createShoppingDataFailure,
  createShoppingDataStart,
  createShoppingDataSuccess,
  getShoppingDatasFailure,
  getShoppingDatasStart,
  getShoppingDatasSuccess,
} from "./ShoppingDataActions";

export const getShoppingDatas = async (dispatch) => {
    dispatch(getShoppingDatasStart());
    try {
      const res = await axios.get("/shoppingdatas" , {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getShoppingDatasSuccess(res.data));
    } catch (err) {
      dispatch(getShoppingDatasFailure());
    }
};

//create
export const createShoppingData = async (shoppingdata, dispatch) => {
  dispatch(createShoppingDataStart());
  try {
    const res = await axios.post("/shoppingdatas", shoppingdata, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createShoppingDataSuccess(res.data));
  } catch (err) {
    dispatch(createShoppingDataFailure());
  }
};


