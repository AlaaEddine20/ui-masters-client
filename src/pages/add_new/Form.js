import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions/postActions";

const Form = ({ js, css }) => {
  const [postData, setPostData] = useState({
    js: "",
    css: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
  };

  return <div></div>;
};

export default Form;
