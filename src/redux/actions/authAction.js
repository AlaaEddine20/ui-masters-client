import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  AUTH_LOADING,
  AUTH_LOGOUT,
} from "../constants/authConstants";
import axios from "axios";
import Cookies from "js-cookie";

export const userLoaded = () => async (dispatch) => {
  try {
    dispatch({
      type: AUTH_LOADING,
      payload: {
        isLoading: true,
      },
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get("http://localhost:8000/users/me", config);

    const accessToken = res.data.accessToken;
    const refreshToken = res.data.refreshToken;

    Cookies.set("access", accessToken);
    Cookies.set("refresh", refreshToken);

    if (res.ok) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data.user,
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
    dispatch({
      type: AUTH_LOADING,
      payload: {
        payload: {
          isLoading: true,
        },
      },
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
    const refreshToken = res.data.refreshToken;

    Cookies.set("access", accessToken);
    Cookies.set("refresh", refreshToken);

    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        token: res.data.accessToken,
        // refreshToken: res.data.refreshToken,
        user: res.data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: {
        error: error.response.data.msg,
      },
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};
