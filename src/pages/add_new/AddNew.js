import React, { useState } from "react";
// editor
import Editor from "react-code-live";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/actions/postActions";
// styles
import styles from "./AddNew.module.scss";

const AddNew = () => {
  const [postData, setPostData] = useState({
    title: "",
    js: "",
    css: "",
  });

  const getJsCode = (js) => {
    setPostData({ ...postData, js });
  };

  const getCssCode = (css) => {
    setPostData({ ...postData, css });
  };

  const getTitle = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const isLoading = useSelector((state) => state.postReducer.isLoading);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
  };

  return (
    <div className={styles.wrapper}>
      <h3 style={{ color: "#fff", marginBottom: "50px" }}>
        Upload your next component
      </h3>

      <div className={styles.btn_wrapper}>
        {isLoading ? (
          <button onClick={handleSubmit}>Loading...</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.form_wrapper}
      >
        <label htmlFor="title">Give it a title</label>
        <input onChange={getTitle} type="text" name="title" />
      </form>
      <Editor
        className={styles.container}
        getJsCode={getJsCode}
        getCssCode={getCssCode}
        initialjs={"function test () { return <h1>Hello</h1>}"}
        initialCss={""}
      />
    </div>
  );
};

export default AddNew;
