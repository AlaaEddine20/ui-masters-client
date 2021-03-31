import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  AUTH_LOADING,
  UPDATE_USER_LOADING,
  UPDATE_USER_FAIL,
  USER_LOGOUT,
  UPDATE_USER_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAIL,
} from "../constants/userConstants";
import axios from "axios";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const userLoaded = () => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_LOADING,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get("http://localhost:8000/users/me", config);

    const accessToken = res.data.accessToken;

    if (res.ok) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          user: res.data.user,
          token: accessToken,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: "REQUEST REJECTED",
    });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_LOADING,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(userData);

    const res = await axios.post(
      "http://localhost:8000/users/register",
      body,
      config
    );

    console.log(res.data);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: {
        error,
      },
    });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_LOADING,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(userData);

    const res = await axios.post(
      "http://localhost:8000/users/login",
      body,
      config
    );

    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        token: res.data.accessToken,
        user: res.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: {
        error: error,
      },
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    // dispatch({
    //   type: AUTH_LOADING,
    // });
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // };

    // const res = await axios.post("http://localhost:8000/users/logout", config);

    // console.log("LOGOUT HERE ==>", res);

    dispatch({
      type: USER_LOGOUT,
      payload: {
        user: null,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: {
        error: error,
      },
    });
  }
};

export const uploadProfilePic = (id, image) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_LOADING,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      `http://localhost:8000/users/${id}/upload`,
      formData,
      config
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: {
        profilePic: res.data.profilePic,
      },
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: {
        error: error,
      },
    });
  }
};
