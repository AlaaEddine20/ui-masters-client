import { combineReducers } from "redux";
import { postReducer } from "../reducers/postReducer";
import { postsReducer } from "../reducers/postsReducer";
import { userReducer } from "../reducers/userReducer";

export default combineReducers({
  userReducer,
  postReducer,
  postsReducer,
});
