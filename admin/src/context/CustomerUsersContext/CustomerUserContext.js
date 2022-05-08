import CustomerUserReducer from "./CustomerUserReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  customerusers: [],
  isFetching: false,
  error: false,
};

export const CustomerUserContext = createContext(INITIAL_STATE);

export const CustomerUserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CustomerUserReducer, INITIAL_STATE);

  return (
    <CustomerUserContext.Provider
      value={{
        customerusers: state.customerusers,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </CustomerUserContext.Provider>
  );
};
