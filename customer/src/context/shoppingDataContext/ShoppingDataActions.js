export const getShoppingDatasStart = () => ({
    type: "GET_SHOPPINGDATAS_START",
  });
  
  export const getShoppingDatasSuccess = (shoppingdatas) => ({
    type: "GET_SHOPPINGDATAS_SUCCESS",
    payload: shoppingdatas,
  });
  
  export const getShoppingDatasFailure = () => ({
    type: "GET_SHOPPINGDATAS_FAILURE",
  });

  export const createShoppingDataStart = () => ({
    type: "CREATE_SHOPPINGDATAS_START",
  });
  
  export const createShoppingDataSuccess = (shoppingdata) => ({
    type: "CREATE_SHOPPINGDATAS_SUCCESS",
    payload: shoppingdata,
  });
  
  export const createShoppingDataFailure = () => ({
    type: "CREATE_SHOPPINGDATAS_FAILURE",
  });
  