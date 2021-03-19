import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadProfilePic } from "../../redux/actions/authAction";
import styles from "./Profile.module.scss";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <div className={styles.profile_container}>
      <div className={styles.wrapper_profile}>
        <div className={styles.profile_pic}>
          {user.profilePic ? (
            <>
              <img src={user.profilePic} alt="profile-pic" />
              <i className="fas fa-plus"></i>
            </>
          ) : (
            <>
              <img src="https://via.placeholder.com/150" alt="profile-pic" />
              <i className="fas fa-plus"></i>
            </>
          )}
        </div>
        <div className={styles.username}>
          <h2 style={{ color: "#8739f9" }}>
            {user.name}
            <span> {user.lastname}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
