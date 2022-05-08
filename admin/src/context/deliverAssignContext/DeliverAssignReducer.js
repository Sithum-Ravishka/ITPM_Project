const DeliverAssignReducer = (state, action) => {
  switch (action.type) {
    case "GET_DELIVERASSIGNS_START":
      return {
        deliverassigns: [],
        isFetching: true,
        error: false,
      };
    case "GET_DELIVERASSIGNS_SUCCESS":
      return {
        deliverassigns: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_DELIVERASSIGNS_FAILURE":
      return {
        deliverassigns: [],
        isFetching: false,
        error: true,
      };

    case "CREATE_DELIVERASSIGN_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_DELIVERASSIGN_SUCCESS":
      return {
        deliverassigns: [...state.deliverassigns, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_DELIVERASSIGN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    case "UPDATE_DELIVERASSIGN_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_DELIVERASSIGN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_DELIVERASSIGN_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };

    case "UPLOAD_DELIVERASSIGN_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_DELIVERASSIGN_SUCCESS":
      return {
        deliverassigns: state.deliverassigns.map(
          (deliverassign) =>
            deliverassign._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_DELIVERASSIGN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_DELIVERASSIGN_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_DELIVERASSIGN_SUCCESS":
      return {
        deliverassigns: state.deliverassigns.filter(
          (deliverassign) => deliverassign._id !== action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "DELETE_DELIVERASSIGN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export default DeliverAssignReducer;
