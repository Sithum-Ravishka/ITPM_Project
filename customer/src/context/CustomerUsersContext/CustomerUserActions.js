export const getCustomerUsersStart = () => ({
    type: "GET_CUSTOMERUSERS_START",
  });
  
  export const getCustomerUsersSuccess = (customerusers) => ({
    type: "GET_CUSTOMERUSERS_SUCCESS",
    payload: customerusers,
  });
  
  export const getCustomerUsersFailure = () => ({
    type: "GET_CUSTOMERUSERS_FAILURE",
  });

  export const createCustomerUserStart = () => ({
    type: "CREATE_CUSTOMERUSER_START",
  });
  
  export const createCustomerUserSuccess = (customeruser) => ({
    type: "CREATE_CUSTOMERUSER_SUCCESS",
    payload: customeruser,
  });
  
  export const createCustomerUserFailure = () => ({
    type: "CREATE_CUSTOMERUSER_FAILURE",
  });
