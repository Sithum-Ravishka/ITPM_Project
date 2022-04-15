export const getDeliveryUsersStart = () => ({
    type: "GET_DELIVERYUSERS_START",
  });
  
  export const getDeliveryUsersSuccess = (deliveryusers) => ({
    type: "GET_DELIVERYUSERS_SUCCESS",
    payload: deliveryusers,
  });
  
  export const getDeliveryUsersFailure = () => ({
    type: "GET_DELIVERYUSERS_FAILURE",
  });

  export const createDeliveryUserStart = () => ({
    type: "CREATE_DELIVERYUSER_START",
  });
  
  export const createDeliveryUserSuccess = (deliveryuser) => ({
    type: "CREATE_DELIVERYUSER_SUCCESS",
    payload: deliveryuser,
  });
  
  export const createDeliveryUserFailure = () => ({
    type: "CREATE_DELIVERYUSER_FAILURE",
  });
