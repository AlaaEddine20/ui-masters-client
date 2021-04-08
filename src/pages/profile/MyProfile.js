import axios from "axios";
import React, { useState } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { uploadProfilePic } from "../../redux/actions/userActions";
import avatar from "./avatar.png";
// styles
import LoadingBar from "./LoadingBar";
import styles from "./Style.module.scss";

const MyProfile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const dispatch = useDispatch();

  const [image, setImage] = useState("");

  const userId = user._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadProfilePic(userId, image));
  };

  return (
    <div className={styles.profile_container}>
      <div className={styles.wrapper_profile}>
        <div className={styles.profile_pic}>
          {user.profilePic ? (
            <>
              <img src={user.profilePic} alt="profile-pic" />
            </>
          ) : (
            <img src={avatar} alt="profile-pic" />
          )}

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
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label htmlFor="file">Choose file</label>
              <input className={styles.inputs} type="submit" value="Save" />
            </form>
          </div>
        </div>
        <div className={styles.user_info}>
          <h2 className="ml-3">
            {user.name}
            <span> {user.lastname}</span>
          </h2>
          <h4>{user.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
