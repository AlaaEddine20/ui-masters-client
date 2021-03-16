import {
  POST_SUCCESS,
  POST_LOADING,
  POST_FAIL,
} from "../constants/postConstants";
import axios from "axios";
import Cookies from "js-cookie";

export const addPost = (postData) => async (dispatch) => {
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
    console.log(res);
    const accessToken = res.data.accessToken;
    //Cookies.get("access", accessToken);

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
