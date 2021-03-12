import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  user: {
    name: "",
    lastname: "",
    email: "",
    password: "",
    profilePic: "",
    likedPosts: [],
  },
};

const combinedReducers = combineReducers({
  authReducer,
});

export default function configureStore() {
  return createStore(
    combinedReducers,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
