const DeliverReducer = (state, action) => {
    switch (action.type) {
        case "GET_DELIVERS_START":
        return {
            delivers: [],
            isFetching: true,
            error: false,
        };
        case "GET_DELIVERS_SUCCESS":
        return {
            delivers: action.payload,
            isFetching: false,
            error: false,
        };
        case "GET_DELIVERS_FAILURE":
        return {
            delivers: [],
            isFetching: false,
            error: true,
        };

        case "CREATE_DELIVER_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "CREATE_DELIVER_SUCCESS":
            return {
              delivers: [...state.delivers, action.payload],
              isFetching: false,
              error: false,
            };
          case "CREATE_DELIVER_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
      
          case "UPLOAD_DELIVER_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "UPLOAD_DELIVER_SUCCESS":
            return {
              delivers: state.delivers.map(
                (deliver) => deliver._id === action.payload._id && action.payload
              ),
              isFetching: false,
              error: false,
            };
          case "UPLOAD_DELIVER_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
        default:
            return { ...state };
    }
};
export default DeliverReducer;