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

        default:
            return { ...state };
    }
};
export default DeliverReducer;