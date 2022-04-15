import DeliveryUserReducer from "./DeliveryUserReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  deliveryusers: [],
  isFetching: false,
  error: false,
};

export const DeliveryUserContext = createContext(INITIAL_STATE);

export const DeliverContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DeliveryUserReducer, INITIAL_STATE);

  return (
    <DeliveryUserContext.Provider
      value={{
        deliveryusers: state.deliveryusers,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DeliveryUserContext.Provider>
  );
};
