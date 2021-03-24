import React from "react";
// redux
import { useSelector } from "react-redux";
// router
import { Route, Redirect } from "react-router-dom";
// components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import SideBar from "./components/sidebar/SideBar";
import MyComponents from "./pages/mycomponents/MyComponents";
import AddNew from "./pages/add_new/AddNew";
import Header from "./components/header/Header";
import DiscoverSection from "./pages/feed/DiscoverSection";
// css
import "./App.css";

function App() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="App">
      {user ? (
        <div className="main_container">
          <SideBar />
          <Header />

          <div className="home_right">
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/add_new">
              <AddNew />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/components/:id">
              <MyComponents />
            </Route>
            <Route path="/discover">
              <DiscoverSection />
            </Route>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        {user ? <Redirect to="/profile" /> : <Login />}
      </Route>
    </div>
  );
}

export default App;
