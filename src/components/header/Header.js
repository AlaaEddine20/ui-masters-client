import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";

const Header = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div className={styles.header_wrapper}>
      <h4 style={{ color: "#8739f9" }}>
        {user.name}
        <span> {user.lastname}</span>
      </h4>
    </div>
  );
};

export default Header;
