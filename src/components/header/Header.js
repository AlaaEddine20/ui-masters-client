import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import avatar from "./../../pages/profile/avatar.png";

// styles
import styles from "./Header.module.scss";

const Header = () => {
  const user = useSelector((state) => state.userReducer.user);

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
      {user.profilePic && (
        <div className={styles.pic_wrapper}>
          {user.profilePic ? (
            <img src={user.profilePic} alt="profile-pic" />
          ) : (
            <img src={avatar} alt="profile-pic" />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
