import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

export const initialState = {};
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStores = () => {
  const store = createStore(
    persistedReducer,
    //initialState,
    composedEnhancer(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
export default createStores;
