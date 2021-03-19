import React, { useState } from "react";
import Editor from "react-code-live";
import styles from "./MyComp.module.scss";

function MyEditor({ post }) {
  // const [showCode, setShowCode] = useState(true);

  return (
    <>
      {/* <h6
        onClick={() => setShowCode((prev) => !prev)}
        style={{ color: "#fff", cursor: "pointer", paddingTop: "5rem" }}
      >
        Hide / Show code
      </h6> */}
      {/* {showCode && ( */}
      <Editor
        className={styles.container}
        initialJs={post.js}
        initialCss={post.css}
      />
      {/* )} */}
    </>
  );
}

export default MyEditor;
