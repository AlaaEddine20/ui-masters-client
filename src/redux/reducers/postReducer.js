import {
  POST_SUCCESS,
  POST_LOADING,
  POST_FAIL,
} from "../constants/postConstants";

const initialState = {
  post: null,
  isLoading: false,
  error: false,
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: false,
      };

    case POST_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case POST_FAIL:
      return {
        ...state,
        ...payload,
        post: null,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
