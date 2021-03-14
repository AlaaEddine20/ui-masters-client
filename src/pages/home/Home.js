import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <h1>Home page</h1>
      <h1>{user.name}</h1>
    </div>
  );
};

export default Home;
