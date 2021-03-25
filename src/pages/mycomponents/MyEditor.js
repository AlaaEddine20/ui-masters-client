import React from "react";
import Editor from "react-code-live";
// import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.scss";

function MyEditor({ post, deletePostFunction, postId }) {
  return (
    <>
      <button onClick={() => deletePostFunction(postId)}> Delete</button>
      <Editor
        className={styles.container}
        initialJs={post.js}
        initialCss={post.css}
      />
    </>
  );
}

export default MyEditor;
