const DeliveryUsersReducer = (state, action) => {
    switch (action.type) {
        case "GET_DELIVERYUSERS_START":
        return {
            deliveryusers: [],
            isFetching: true,
            error: false,
        };
        case "GET_DELIVERYUSERS_SUCCESS":
        return {
            deliveryusers: action.payload,
            isFetching: false,
            error: false,
        };
        case "GET_DELIVERYUSERS_FAILURE":
        return {
            deliveryusers: [],
            isFetching: false,
            error: true,
        };

        case "CREATE_DELIVERYUSER_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "CREATE_DELIVERYUSER_SUCCESS":
            return {
              deliveryusers: [...state.deliveryusers, action.payload],
              isFetching: false,
              error: false,
            };
          case "CREATE_DELIVERYUSER_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
      
          case "UPLOAD_DELIVERYUSER_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "UPLOAD_DELIVERYUSER_SUCCESS":
            return {
              deliveryusers: state.deliveryusers.map(
                (deliveryuser) => deliveryuser._id === action.payload._id && action.payload
              ),
              isFetching: false,
              error: false,
            };
          case "UPLOAD_DELIVERYUSER_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };
        default:
            return { ...state };
    }
};
export default DeliveryUsersReducer;