export const getCardDatasStart = () => ({
    type: "GET_CARDDATAS_START",
  });
  
  export const getCardDatasSuccess = (carddatas) => ({
    type: "GET_CARDDATAS_SUCCESS",
    payload: carddatas,
  });
  
  export const getCardDatasFailure = () => ({
    type: "GET_CARDDATAS_FAILURE",
  });

  export const createCardDataStart = () => ({
    type: "CREATE_CARDDATAS_START",
  });
  
  export const createCardDataSuccess = (carddatas) => ({
    type: "CREATE_CARDDATAS_SUCCESS",
    payload: carddatas,
  });
  
  export const createCardDataFailure = () => ({
    type: "CREATE_CARDDATAS_FAILURE",
  });
  