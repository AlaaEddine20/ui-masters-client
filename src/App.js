import React from "react";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./App.css";

function App() {
  const user = useSelector((state) => state.authReducer.user);
  console.log("USER HERE =>", user);
  return (
    <div className="App">
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>

      <Route path="/browse">{user ? <Home /> : <Redirect to="/login" />}</Route>

      <Route path="/login">
        {user ? <Redirect to="/browse" /> : <Login />}
      </Route>
    </div>
  );
}

export default App;
