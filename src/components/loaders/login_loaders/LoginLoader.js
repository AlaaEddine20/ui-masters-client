import React from "react";
import styles from "./LoginLoader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
