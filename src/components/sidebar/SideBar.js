import React from "react";
// Components
import SideBarLinks from "./SideBarLinks";
// router
import { Link } from "react-router-dom";
// Styles
import styles from "./Sidebar.module.scss";

const SideBar = () => {
  return (
    <>
      <div className={styles.sidebar_left}>
        <div className={styles.sidebar_logo}>
          <h1>UI MASTERS</h1>
        </div>
        <div className={styles.sidebar_links_wrapper}>
          {SideBarLinks.map((link) => (
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
