import React, { useState, useEffect } from "react";
import Editor from "react-code-live";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../redux/actions/postActions";
import styles from "./MyComp.module.scss";

const MyComponents = () => {
  const post = useSelector((state) => state.postReducer.post);
  console.log(post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts);
    console.log("POST IN MY COMPONENTS USEFFECT =>", post);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "#fff" }}> My Components </h1>
      <Editor
        className={styles.container}
        textAreaClassName={styles.custom}
        getJsCode={post.js}
        getCssCode={post.css}
      />
    </div>
  );
};

export default MyComponents;
