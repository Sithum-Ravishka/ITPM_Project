const CustomerUsersReducer = (state, action) => {
    switch (action.type) {
        case "GET_CUSTOMERUSERS_START":
        return {
            customerusers: [],
            isFetching: true,
            error: false,
        };
        case "GET_CUSTOMERUSERS_SUCCESS":
        return {
            customerusers: action.payload,
            isFetching: false,
            error: false,
        };
        case "GET_CUSTOMERUSERS_FAILURE":
        return {
            customerusers: [],
            isFetching: false,
            error: true,
        };

        case "CREATE_CUSTOMERUSER_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "CREATE_CUSTOMERUSER_SUCCESS":
            return {
              customerusers: [...state.customerusers, action.payload],
              isFetching: false,
              error: false,
            };
          case "CREATE_CUSTOMERUSER_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
      
          case "UPLOAD_CUSTOMERUSER_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "UPLOAD_CUSTOMERUSER_SUCCESS":
            return {
              customerusers: state.customerusers.map(
                (customeruser) => customeruser._id === action.payload._id && action.payload
              ),
              isFetching: false,
              error: false,
            };
          case "UPLOAD_CUSTOMERUSER_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
            case "DELETE_CUSTOMERUSER_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "DELETE_CUSTOMERUSER_SUCCESS":
            return {
              customerusers: state.customerusers.filter((customeruser) => customeruser._id !== action.payload),
              isFetching: false,
              error: false,
            };
          case "DELETE_CUSTOMERUSER_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };

        default:
            return { ...state };
    }
};
export default CustomerUsersReducer;