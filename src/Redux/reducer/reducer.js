import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_COUNT_INCREMENT,
  POST_COUNT_DECREMENT,
} from "../action/types";

const initialState = {
  loading: false,
  data: [],
  count: 100,
  error: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case POST_COUNT_INCREMENT:
      return {
        ...state,
        loading: false,
        count: state.count + 1,
      };
    case POST_COUNT_DECREMENT:
      return {
        ...state,
        loading: false,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default Reducer;
