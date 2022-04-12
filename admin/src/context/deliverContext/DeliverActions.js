export const getDeliversStart = () => ({
    type: "GET_DELIVERS_START",
  });
  
  export const getDeliversSuccess = (delivers) => ({
    type: "GET_DELIVERS_SUCCESS",
    payload: delivers,
  });
  
  export const getDeliversFailure = () => ({
    type: "GET_DELIVERS_FAILURE",
  });