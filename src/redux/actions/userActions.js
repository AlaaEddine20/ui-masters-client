import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_LOADING,
  UPDATE_USER_FAIL,
} from "./../constants/userConstants";
import axios from "axios";

export const uploadProfilePic = (id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `http://localhost:8000/users/${id}/upload`,
      config
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: {
        error: error.response.data.error,
      },
    });
  }
};
