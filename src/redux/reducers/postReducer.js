import {
  POST_SUCCESS,
  POST_LOADING,
  POST_FAIL,
  POST_DELETE,
  POST_LIKED,
  POST_UNLIKED,
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
        userPosts: state.userPosts.filter((post) => post._id !== payload._id),
        isLoading: false,
      };

    case POST_LIKED:
      return {
        ...state,
        likes: { ...state.posts, payload },
        isLoading: false,
        error: false,
      };

    case POST_UNLIKED:
      return {
        ...state,
        likes: state.likes.filter((like) => like._id !== payload._id),
        isLoading: false,
        error: false,
      };

    default:
      return state;
  }
};
