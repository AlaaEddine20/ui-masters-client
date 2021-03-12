import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancer(applyMiddleware(...middleware))
);

export default store;
