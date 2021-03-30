import React, { useState } from "react";
import Editor from "react-code-live";
import styles from "./../mycomponents/Editor.module.scss";

function MyEditor({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShowCode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.show : styles.hide}>
      <button onClick={toggleShowCode}>
        {isOpen ? <span>Hide code</span> : <span>Show Code</span>}
      </button>
      <Editor
        className={styles.container}
        initialJs={post.js}
        initialCss={post.css}
      />
    </div>
  );
}

export default MyEditor;
