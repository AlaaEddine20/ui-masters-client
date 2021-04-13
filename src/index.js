import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import createStores from "./redux/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
const { store } = createStores();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
