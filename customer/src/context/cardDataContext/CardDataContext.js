import CardDataReducer from "./CardDataReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  carddatas: [],
  isFetching: false,
  error: false,
};

export const CardDataContext = createContext(INITIAL_STATE);

export const CardDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CardDataReducer, INITIAL_STATE);

  return (
    <CardDataContext.Provider
      value={{
        carddatas: state.carddatas,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </CardDataContext.Provider>
  );
};
