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

  export const createDeliverStart = () => ({
    type: "CREATE_DELIVER_START",
  });
  
  export const createDeliverSuccess = (deliver) => ({
    type: "CREATE_DELIVER_SUCCESS",
    payload: deliver,
  });
  
  export const createDeliverFailure = () => ({
    type: "CREATE_DELIVER_FAILURE",
  });
  
  export const updateDeliverStart = () => ({
    type: "UPDATE_DELIVER_START",
  });
  
  export const updateDeliverSuccess = (deliver) => ({
    type: "UPDATE_DELIVER_SUCCESS",
    payload: deliver,
  });
  
  export const updateDeliverFailure = () => ({
    type: "UPDATE_DELIVER_FAILURE",
  });
  
  export const deleteDeliverStart = () => ({
    type: "DELETE_DELIVER_START",
  });
  
  export const deleteDeliverSuccess = (id) => ({
    type: "DELETE_DELIVER_SUCCESS",
    payload: id,
  });
  
  export const deleteDeliverFailure = () => ({
    type: "DELETE_DELIVER_FAILURE",
  });
  