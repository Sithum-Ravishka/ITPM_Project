export const getDeliverAssingsStart = () => ({
    type: "GET_DELIVERASSIGNS_START",
  });
  
  export const getDeliverAssingsSuccess = (deliverassigns) => ({
    type: "GET_DELIVERASSIGNS_SUCCESS",
    payload: deliverassigns,
  });
  
  export const getDeliverAssingsFailure = () => ({
    type: "GET_DELIVERASSIGNS_FAILURE",
  });

  export const createDeliverAssignStart = () => ({
    type: "CREATE_DELIVERASSIGN_START",
  });
  
  export const createDeliverAssignSuccess = (deliverassign) => ({
    type: "CREATE_DELIVERASSIGN_SUCCESS",
    payload: deliverassign,
  });
  
  export const createDeliverAssignFailure = () => ({
    type: "CREATE_DELIVERASSIGN_FAILURE",
  });
  
  export const updateDeliverAssignStart = () => ({
    type: "UPDATE_DELIVERASSIGN_START",
  });
  
  export const updateDeliverAssignSuccess = (deliverassign) => ({
    type: "UPDATE_DELIVERASSIGN_SUCCESS",
    payload: deliverassign,
  });
  
  export const updateDeliverAssignFailure = () => ({
    type: "UPDATE_DELIVERASSIGN_FAILURE",
  });
  
  export const deleteDeliverAssignStart = () => ({
    type: "DELETE_DELIVERASSIGN_START",
  });
  
  export const deleteDeliverAssignSuccess = (id) => ({
    type: "DELETE_DELIVERASSIGN_SUCCESS",
    payload: id,
  });
  
  export const deleteDeliverAssignFailure = () => ({
    type: "DELETE_DELIVERASSIGN_FAILURE",
  });
  