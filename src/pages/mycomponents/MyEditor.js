import React from "react";
import { Spinner } from "react-bootstrap";
import Editor from "react-code-live";
import { useSelector } from "react-redux";
import styles from "./Editor.module.scss";

function MyEditor({ post, deletePostFunction, postId }) {
  const isLoading = useSelector((state) => state.postReducer.isLoading);

  return (
    <>
      {isLoading ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
