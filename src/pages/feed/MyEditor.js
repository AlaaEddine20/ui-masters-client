import React from "react";
import Editor from "react-code-live";
import styles from "./../mycomponents/Editor.module.scss";

function MyEditor({ post }) {
  return (
    <div className={styles.editor_wrapper}>
      <Editor
        className={styles.container}
        initialJs={post.js}
        initialCss={post.css}
      />
    </div>
  );
}

export default MyEditor;
