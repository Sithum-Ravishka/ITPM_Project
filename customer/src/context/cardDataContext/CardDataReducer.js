const CardDataReducer = (state, action) => {
    switch (action.type) {
        case "GET_CARDDATAS_START":
        return {
            carddatas: [],
            isFetching: true,
            error: false,
        };
        case "GET_CARDDATAS_SUCCESS":
        return {
            carddatas: action.payload,
            isFetching: false,
            error: false,
        };
        case "GET_CARDDATAS_FAILURE":
        return {
            carddatas: [],
            isFetching: false,
            error: true,
        };

        case "CREATE_CARDDATA_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "CREATE_CARDDATAS_SUCCESS":
            return {
              carddatas: [...state.carddatas, action.payload],
              isFetching: false,
              error: false,
            };
          case "CREATE_CARDDATA_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
           
        default:
            return { ...state };
    }
};
export default CardDataReducer;