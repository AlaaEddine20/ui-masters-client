import {
  POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_FAIL,
} from "./../constants/allPostsConstants";
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
        error: error.response.data.error,
      },
    });
  }
};
