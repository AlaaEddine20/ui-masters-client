import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {
    name: "",
    lastname: "",
    email: "",
    password: "",
    profilePic: "",
    likedPosts: [],
  },
};

export default function configureStore() {
  return createStore(
    combineReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
