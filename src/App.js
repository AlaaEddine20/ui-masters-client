import React from "react";
// redux
import { useSelector } from "react-redux";
// router
import { Route, Redirect } from "react-router-dom";
// components
import Login from "./pages/login/Login";
import SideBar from "./components/sidebar/SideBar";
import MyComponents from "./pages/mycomponents/MyComponents";
import AddNew from "./pages/add_new/AddNew";
import DiscoverSection from "./pages/feed/DiscoverSection";
// css
import "./App.css";
import Register from "./pages/register/Register";
import ClickedUser from "./pages/profile/ClickedUser";

function App() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div className="App">
      {user ? (
        <div className="main_container">
          <SideBar />

          <div className="home_right">
            <Route path="/add_new">
              <AddNew />
            </Route>
            {/* <Route path="/profile">
              <MyProfile />
            </Route> */}
            <Route path="/components/:id">
              <MyComponents />
            </Route>
            <Route path="/discover">
              <DiscoverSection />
            </Route>
            <Route path="/user/:id">
              <ClickedUser />
            </Route>
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        {user ? <Redirect to="/discover" /> : <Login />}
      </Route>
    </div>
  );
}

export default App;
