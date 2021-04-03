import React, { useState } from "react";
import Editor from "react-code-live";
import styles from "./Discover.module.scss";

function MyEditor({ post }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleShowCode = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <button className={styles.show_hide_btn} onClick={toggleShowCode}>
        {isHidden ? <span>Show Code</span> : <span>Hide code</span>}
      </button>
      <Editor
        className={`${isHidden ? styles.hidden : styles.container}`}
        initialJs={post.js}
        initialCss={post.css}
      />
    </>
  );
}

export default MyEditor;
