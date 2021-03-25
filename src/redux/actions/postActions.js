import {
  POST_SUCCESS,
  POST_LOADING,
  POST_FAIL,
} from "../constants/postConstants";
import axios from "axios";

export const addPost = (postData) => async (dispatch) => {
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

    const body = JSON.stringify(postData);

    const res = await axios.post("http://localhost:8000/posts", body, config);

    dispatch({
      type: POST_SUCCESS,
      payload: {
        userPosts: res.data.newPost,
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

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POST_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const res = await axios.get(
      "http://localhost:8000/posts/user_posts/" + id,
      config
    );

    dispatch({
      type: POST_SUCCESS,
      payload: {
        userPosts: res.data,
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

export const deletePost = (postId) => async (dispatch) => {
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

    const res = await axios.delete(
      "http://localhost:8000/posts/" + postId,
      config
    );

    dispatch({
      type: POST_SUCCESS,
      payload: {
        userPosts: res.data,
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
