import React from "react";
import Editor from "react-code-live";
import { useSelector } from "react-redux";
import styles from "./Editor.module.scss";

function MyEditor({ post, deletePostFunction, updatePost, postId }) {
  const isLoading = useSelector((state) => state.postReducer.isLoading);

  return (
    <>
      {isLoading ? (
        <button className={styles.delete_btn}>Deleting...</button>
      ) : (
        <button
          className={styles.delete_btn}
          onClick={() => deletePostFunction(postId)}
        >
          Delete
        </button>
      )}
      <Editor
        className={styles.container}
        initialJs={post.js}
        initialCss={post.css}
      />
    </>
  );
}

export default MyEditor;
