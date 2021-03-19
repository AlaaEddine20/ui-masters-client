import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";

const Header = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.name_wrapper}>
        <h4 className="my-auto">
          {user.name}
          <span> {user.lastname}</span>
        </h4>
      </div>
      <div className={styles.pic_wrapper}>
        <img src={user.profilePic} alt="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
