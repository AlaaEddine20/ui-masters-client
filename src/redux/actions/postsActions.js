import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_FAIL,
  POST_LOADING,
  POST_LIKED,
  POST_FAIL,
} from "./../constants/postConstants";
import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POSTS_LOADING,
      payload: {
        payload: {
          isLoading: true,
        },
      },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const res = await axios.get("http://localhost:8000/posts", config);

    dispatch({
      type: POSTS_SUCCESS,
      payload: {
        posts: res.data,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POSTS_FAIL,
      payload: {
        error,
      },
    });
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    dispatch({
      type: POST_LOADING,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const res = await axios.put(
      "http://localhost:8000/posts/like/" + postId,
      config
    );

    console.log(res);

    dispatch({
      type: POST_LIKED,
      payload: {
        likes: res.data._id,
      },
    });
  } catch (error) {
    dispatch({
      type: POST_FAIL,
      payload: {
        error,
      },
    });
  }
};
