import {
  AUTH_SUCCESS,
  AUTH_LOADING,
  USER_LOGOUT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  AUTH_FAIL,
  UPDATE_USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAIL,
} from "../constants/userConstants";

const initialState = localStorage.getItem("persist:root")
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).userReducer)
  : {
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: false,
    };

export const userReducer = (state = initialState, action) => {
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
        error: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        ...payload,
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: payload,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...payload },
        isLoggedIn: true,
        isLoading: false,
      };

    case UPDATE_USER_LOADING:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        error: false,
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoggedIn: true,
        error: payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        newUser: payload,
        isLoggedIn: false,
        isLoading: false,
        error: false,
      };

    case REGISTER_LOADING:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        error: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoggedIn: false,
        error: true,
      };

    default:
      return state;
  }
};
