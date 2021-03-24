import React, { useState } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { uploadProfilePic } from "./../../redux/actions/userActions";
// axios
import axios from "axios";
// styles
import LoadingBar from "./LoadingBar";
import styles from "./Profile.module.scss";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const isLoading = useSelector((state) => state.uploadUserReducer.isLoading);
  const dispatch = useDispatch();

  const [profilePic, setProfilePic] = useState("");

  const id = user._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(uploadProfilePic(id));
    console.log("UPLOADED");
  };

  const handleFileChange = ({ target }) => {
    setProfilePic(target.files[0]);
  };

  return (
    <div className={styles.profile_container}>
      <div className={styles.wrapper_profile}>
        <div className={styles.profile_pic}>
          <img src={user.profilePic} alt="profile-pic" />
          {isLoading ? <LoadingBar /> : null}
          <div className={styles.form}>
            <form
              className="mt-3"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <input
                type="file"
                accept="image/"
                id="file"
                onChange={handleFileChange}
              />
              <label for="file">Choose file</label>
              <input className={styles.inputs} type="submit" value="Save" />
            </form>
          </div>
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
