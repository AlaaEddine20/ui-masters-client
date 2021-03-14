import React from "react";
import SideBarLinks from "./SideBarLinks";
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
            <div className={styles.sidebar_links}>
              <h5>{link.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
