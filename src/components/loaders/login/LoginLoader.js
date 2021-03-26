import React from "react";
import styles from "./LoginLoader.module.scss";

const LoginLoader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoginLoader;
