import {
  POST_SUCCESS,
  POST_LOADING,
  POST_FAIL,
  POST_DELETE,
} from "../constants/postConstants";

const initialState = {
  userPosts: null,
  isLoading: false,
  posted: false,
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
        posted: true,
        error: false,
      };

    case POST_LOADING:
      return {
        ...state,
        isLoading: true,
        posted: false,
        error: false,
      };

    case POST_FAIL:
      return {
        ...state,
        ...payload,
        userPosts: null,
        isLoading: false,
        posted: false,
        error: payload,
      };

    case POST_DELETE:
      return {
        ...state,
        userPosts: state.userPosts.filter((post) => post !== payload),
      };

    default:
      return state;
  }
};
