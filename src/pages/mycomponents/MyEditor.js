import React from "react";
import Editor from "react-code-live";
import styles from "./Editor.module.scss";

function MyEditor({ post }) {
  return (
    <Editor
      className={styles.container}
      initialJs={post.js}
      initialCss={post.css}
    />
  );
}

export default MyEditor;
