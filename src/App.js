import React from "react";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.css";
import Profile from "./pages/profile/Profile";
import SideBar from "./components/sidebar/SideBar";

function App() {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div className="App">
      {user ? (
        <div className="main_container">
          <SideBar />

          <div className="home_right">
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </div>
        </div>
      ) : (
        <Login />
      )}
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      {/* <Route path="/login">{user ? <Redirect to="/home" /> : <Login />}</Route> */}
    </div>
  );
}

export default App;
