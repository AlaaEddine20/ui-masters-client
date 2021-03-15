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
            <div key={link.id} className={styles.sidebar_links}>
              <span className="mr-3">{link.icon}</span>
              <h5>{link.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
