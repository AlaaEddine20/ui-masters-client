import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../../redux/actions/authAction";
import styles from "./Header.module.scss";

const Header = () => {
  const user = useSelector((state) => state.authReducer.user);

  const dispatch = useDispatch();

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.name_wrapper}>
        <h6 className="my-auto">
          {user.name}
          <span> {user.lastname}</span>
        </h6>
        <div className={styles.logout_btn}>
          <p onClick={() => dispatch(logout())} className="my-auto">
            Logout
          </p>
        </div>
      </div>
      <div className={styles.pic_wrapper}>
        <img src={user.profilePic} alt="profile-pic" />
      </div>
    </div>
  );
};

export default Header;