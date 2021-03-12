import React from "react";
import Home from "./pages/home/Home";
import { Route } from "react-router-dom";
import Login from "./pages/login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
