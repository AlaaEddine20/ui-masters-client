import React, { useState } from "react";
import PostForm from "../../components/form/PostForm";
import styles from "./MyComp.module.scss";

const MyComponents = () => {
  const [isAddPost, setIsAddPost] = useState(false);

  const toggleModal = () => {
    setIsAddPost((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.modal_btn} onClick={toggleModal}>
        Add New Component
      </button>
      <div className={styles.form}>{isAddPost ? <PostForm /> : null}</div>
    </div>
  );
};

export default MyComponents;
