import DeliverReducer from "./DeliverReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  delivers: [],
  isFetching: false,
  error: false,
};

export const DeliverContext = createContext(INITIAL_STATE);

export const DeliverContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DeliverReducer, INITIAL_STATE);

  return (
    <DeliverContext.Provider
      value={{
        delivers: state.delivers,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DeliverContext.Provider>
  );
};
