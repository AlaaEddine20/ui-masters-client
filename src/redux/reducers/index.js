import { combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { postReducer } from "../reducers/postReducer";
import { postsReducer } from "../reducers/postsReducer";

export default combineReducers({ authReducer, postReducer, postsReducer });
