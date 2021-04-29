import React from "react";
// Components
import generateLinks from "./SideBarLinks";
// router
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import avatar from "./../../pages/profile/avatar.png";
// Styles
import styles from "./Sidebar.module.scss";

const SideBar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const id = useSelector((state) => state.userReducer.user._id);
  const links = generateLinks(id);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={styles.sidebar_left}>
        <div className={styles.sidebar_logo}>
          <h1>UI MASTERS</h1>
        </div>
        <div className={styles.user_info_wrapper}>
          {user.profilePic ? (
            <img src={user.profilePic} alt="profile-pic" />
          ) : (
            <img src={avatar} alt="profile-pic" />
          )}
          <h4>
            {user.name} {user.lastname}
          </h4>
          <button>Change my infos</button>
        </div>
        <div className={styles.sidebar_links_wrapper}>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.sidebar_links}>
                <div className={styles.sidebar_icons}>
                  <span className="mx-3">{link.icon}</span>
                </div>
                <div className={styles.sidebar_text}>
                  <h5 className="my-auto">{link.name}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div onClick={handleLogout} className={styles.logout_icon}>
          <span>Logout</span>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </>
  );
};

export default SideBar;
