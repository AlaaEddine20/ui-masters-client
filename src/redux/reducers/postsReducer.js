import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_FAIL,
  POST_LIKED,
} from "../constants/postConstants";

const initialState = {
  posts: null,
  isLoading: false,
  error: false,
};

export const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTS_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: false,
      };

    case POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case POSTS_FAIL:
      return {
        ...state,
        ...payload,
        posts: null,
        isLoading: false,
        error: payload,
      };
    case POST_LIKED:
      return {
        ...state,
        likes: state.posts[0].likes[0].filter(
          (like) => like._d !== payload._id
        ),
        isLoading: false,
        error: false,
      };

    default:
      return state;
  }
};
