import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_LOADING,
  UPDATE_USER_FAIL,
} from "./../constants/userConstants";

const initialState = {
  profilePic: null,
  isLoading: false,
  error: false,
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: false,
      };

    case UPDATE_USER_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        ...payload,
        profilePic: null,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
