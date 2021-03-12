import {
  AUTH_SUCCESS,
  USER_LOADED,
  USER_IS_LOGGEDOUT,
  AUTH_FAIL,
} from "../constants/authConstants";

const initialState = {
  user: {},
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

    case AUTH_FAIL:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoggedIn: false,
      };

    case USER_LOADED:
      return {
        ...state,
        ...payload,
        user: payload,
        error: false,
        isLoggedIn: true,
        isLoading: false,
      };

    case USER_IS_LOGGEDOUT:
      return {
        ...state,
        ...payload,
        user: {},
        isLoggedIn: false,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
