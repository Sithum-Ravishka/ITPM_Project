import axios from "axios";
import {
  createCardDataFailure,
  createCardDataStart,
  createCardDataSuccess,
  getCardDatasFailure,
  getCardDatasStart,
  getCardDatasSuccess,
} from "./CardDataActions";

export const getCardDatas = async (dispatch) => {
    dispatch(getCardDatasStart());
    try {
      const res = await axios.get("/carddatas" , {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(getCardDatasSuccess(res.data));
    } catch (err) {
      dispatch(getCardDatasFailure());
    }
};

//create
export const createCardData = async (carddata, dispatch) => {
  dispatch(createCardDataStart());
  try {
    const res = await axios.post("/carddatas", carddata, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createCardDataSuccess(res.data));
  } catch (err) {
    dispatch(createCardDataFailure());
  }
};
