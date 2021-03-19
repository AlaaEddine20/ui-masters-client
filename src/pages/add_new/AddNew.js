import React, { useState } from "react";
import Editor from "react-code-live";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions/postActions";
import styles from "./AddNew.module.scss";

const AddNew = () => {
  const [postData, setPostData] = useState({
    js: "",
    css: "",
  });

  const getJsCode = (js) => {
    setPostData({ ...postData, js });
  };

  const getCssCode = (css) => {
    setPostData({ ...postData, css });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
  };

  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "#fff" }}>Upload your next component</h1>
      <div className={styles.wrapper}>
        <Editor
          className={styles.container}
          getJsCode={getJsCode}
          getCssCode={getCssCode}
          initialjs={"function test () { return <h1>Hello</h1>}"}
          initialCss={""}
        />
      </div>
      <div className={styles.btn_wrapper}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddNew;
