import React from "react";
// Components
import generateLinks from "./SideBarLinks";
// router
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Styles
import styles from "./Sidebar.module.scss";

const SideBar = () => {
  const id = useSelector((state) => state.authReducer.user._id);
  const links = generateLinks(id);

  return (
    <>
      <div className={styles.sidebar_left}>
        <div className={styles.sidebar_logo}>
          <h1>UI MASTERS</h1>
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
      </div>
    </>
  );
};

export default SideBar;
