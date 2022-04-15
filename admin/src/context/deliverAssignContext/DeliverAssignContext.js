import DeliverAssignReducer from "./DeliverAssignReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  deliverassigns: [],
  isFetching: false,
  error: false,
};

export const DeliverAssignContext = createContext(INITIAL_STATE);

export const DeliverAssignContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DeliverAssignReducer, INITIAL_STATE);

  return (
    <DeliverAssignContext.Provider
      value={{
        deliverassigns: state.deliverassigns,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </DeliverAssignContext.Provider>
  );
};
