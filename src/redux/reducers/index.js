import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { postReducer } from "../reducers/postReducer";
import { postsReducer } from "../reducers/postsReducer";
import { updateUserReducer } from "../reducers/updateUserReducer";

export default combineReducers({
  authReducer,
  postReducer,
  postsReducer,
  updateUserReducer,
});
