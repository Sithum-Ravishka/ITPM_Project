import ShoppingDataReducer from "./ShoppingDataReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  shoppingdatas: [],
  isFetching: false,
  error: false,
};

export const ShoppingDataContext = createContext(INITIAL_STATE);

export const ShoppingDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ShoppingDataReducer, INITIAL_STATE);

  return (
    <ShoppingDataContext.Provider
      value={{
        shoppingdatas: state.shoppingdatas,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ShoppingDataContext.Provider>
  );
};
