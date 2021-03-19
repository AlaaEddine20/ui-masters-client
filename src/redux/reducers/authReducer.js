import {
  AUTH_SUCCESS,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_FAIL,
} from "../constants/authConstants";

const initialState = {
  isAuth: localStorage.getItem("token") ? true : false,
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        isLoading: false,
        error: false,
      };

    case AUTH_LOADING:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        error: false,
      };

    case AUTH_FAIL:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoggedIn: false,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        ...payload,
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
