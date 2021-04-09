import {
  POST_SUCCESS,
  POST_LOADING,
  POST_FAIL,
  POST_DELETE,
  POST_LIKED,
  POST_UNLIKED,
  // POST_UPDATED,
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

    const res = await axios.post(
      `${process.env.REACT_APP_URL}/posts`,
      body,
      config
    );

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
      `${process.env.REACT_APP_URL}/posts/user_posts/${id}`,
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

    await axios.delete(`${process.env.REACT_APP_URL}/posts/${postId}`, config);

    dispatch({
      type: POST_DELETE,
      payload: {
        _id: postId,
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

export const toggleLike = (liked, postId, userId) => async (dispatch) => {
  try {
    dispatch({
      type: liked ? POST_UNLIKED : POST_LIKED,
      payload: {
        postId,
        userId,
      },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (liked) {
      await axios.delete(
        `${process.env.REACT_APP_URL}/posts/like/${postId}`,
        config
      );
    } else {
      const body = JSON.stringify({ postId });
      await axios.post(`${process.env.REACT_APP_URL}/posts/like`, body, config);
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_FAIL,
      payload: {
        error,
      },
    });
  }
};

