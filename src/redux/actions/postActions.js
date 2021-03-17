import {
  POST_SUCCESS,
  POST_LOADING,
  POST_FAIL,
} from "../constants/postConstants";
import axios from "axios";

export const addPost = (postData) => async (dispatch) => {
  console.log(postData);
  try {
    dispatch({
      type: POST_LOADING,
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

    const body = JSON.stringify(postData);

    const res = await axios.post("http://localhost:8000/posts", body, config);

    const accessToken = res.data.accessToken;

    dispatch({
      type: POST_SUCCESS,
      payload: {
        post: res.data.newPost,
        token: accessToken,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_FAIL,
      payload: {
        error: error.response.data.error,
      },
    });
  }
};
