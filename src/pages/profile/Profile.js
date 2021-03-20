import React, { useState } from "react";
// redux
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// axios
import axios from "axios";
// styles
import styles from "./Profile.module.scss";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);

  const [profilePic, setProfilePic] = useState("");

  const id = user._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const formData = new FormData();
      formData.append("image", profilePic);

      await axios.post(
        process.env.REACT_APP_URL + "/users/" + id + "/upload",
        formData,
        config
      );
      setProfilePic(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = ({ target }) => {
    setProfilePic(target.files[0]);
  };

  return (
    <div className={styles.profile_container}>
      <div className={styles.wrapper_profile}>
        <div className={styles.profile_pic}>
          <img src={user.profilePic} alt="profile-pic" />
          <form
            className="mt-4"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="file"
              accept="image/"
              name="file"
              onChange={handleFileChange}
            />
            <input type="submit" />
          </form>
        </div>
        <div className={styles.username}>
          <h2 className="ml-3" style={{ color: "#8739f9" }}>
            {user.name}
            <span> {user.lastname}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
