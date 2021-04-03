import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_FAIL,
  POST_LIKED,
  POST_UNLIKED,
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

    case POST_LIKED: {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId
            ? {
                ...post,
                likes: [...post.likes, { _id: payload.userId }],
              }
            : { ...post, likes: [...post.likes] }
        ),
      };
    }

    case POST_UNLIKED:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId
            ? {
                ...post,
                likes: post.likes.filter((like) => like._id !== payload.userId),
              }
            : { ...post, likes: [...post.likes] }
        ),
      };

    default:
      return state;
  }
};
