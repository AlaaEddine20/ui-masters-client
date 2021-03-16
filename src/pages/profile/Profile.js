import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div>
      <h1 style={{ color: "#fff" }}>My Profile</h1>
      <h2 style={{ color: "#8739f9" }}>
        {user.name}
        <span> {user.lastname}</span>
      </h2>
    </div>
  );
};

export default Profile;
