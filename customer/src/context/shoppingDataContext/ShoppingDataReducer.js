const ShoppingDataReducer = (state, action) => {
    switch (action.type) {
        case "GET_SHOPPINGDATAS_START":
        return {
            shoppingdatas: [],
            isFetching: true,
            error: false,
        };
        case "GET_SHOPPINGDATAS_SUCCESS":
        return {
            shoppingdatas: action.payload,
            isFetching: false,
            error: false,
        };
        case "GET_SHOPPINGDATAS_FAILURE":
        return {
            shoppingdatas: [],
            isFetching: false,
            error: true,
        };

        case "CREATE_SHOPPINGDATA_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "CREATE_SHOPPINGDATA_SUCCESS":
            return {
              shoppingdatas: [...state.shoppingdatas, action.payload],
              isFetching: false,
              error: false,
            };
          case "CREATE_SHOPPINGDATA_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
           
        default:
            return { ...state };
    }
};
export default ShoppingDataReducer;