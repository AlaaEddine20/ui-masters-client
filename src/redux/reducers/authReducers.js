import { actions } from "../actions/authAction";
import { initialState } from "../store/store";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTHENTICATE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
