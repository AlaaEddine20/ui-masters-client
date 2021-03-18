import React, { useState, useEffect } from "react";
import Editor from "react-code-live";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../redux/actions/postActions";
import styles from "./MyComp.module.scss";

const MyComponents = (props) => {
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getUserPosts(params.id));
    console.log("MY COMPONENTS USEFFECT =>", params);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "#fff" }}> My Components </h1>

      {posts?.map((post) => (
        <Editor
          className={styles.container}
          textAreaClassName={styles.custom}
          initialJs={post.js}
          initialCss={post.css}
        />
      ))}
    </div>
  );
};

export default MyComponents;
