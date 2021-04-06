import React from "react";
import avatar from "./avatar.png";
import styles from "./Style.module.scss";

const ClickedUser = (props) => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.wrapper_profile}>
        <div className={styles.profile_pic}>
          {props.user.profilePic ? (
            <>
              <img src={props.user.profilePic} alt="profile-pic" />
            </>
          ) : (
            <img src={avatar} alt="profile-pic" />
          )}
        </div>
        <div className={styles.username}>
          <h2 className="ml-3" style={{ color: "#8739f9" }}>
            {props.user.name}
            <span> {props.user.lastname}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClickedUser;
