import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  USER_LOADED,
  USER_IS_LOGGEDOUT,
} from "../constants/authConstants";
import axios from "axios";

export const userLoaded = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.get("http://localhost:8000/users/me", config);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: "REQUEST REJECTED",
    });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
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

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data,
    });

    dispatch(userLoaded());
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: "REQUEST REJECTED",
    });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
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
      payload: "REQUEST REJECTED",
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: USER_IS_LOGGEDOUT,
  });
};
