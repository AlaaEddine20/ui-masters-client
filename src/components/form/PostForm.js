import React, { useState } from "react";
// redux hooks
import { useDispatch } from "react-redux";
// redux functions
import { addPost } from "../../redux/actions/postActions";
// Styles & Bootstrap
import { Button, Form } from "react-bootstrap";
// Styles
import styles from "./Form.module.scss";

const PostForm = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    js: "",
    css: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className={styles.form_wrapper}
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" />
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" rows={3} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Code JS</Form.Label>
          <Form.Control name="js" as="textarea" rows={3} />
          <Form.Label>Code CSS</Form.Label>
          <Form.Control name="css" as="textarea" rows={3} />
        </Form.Group>
        <Button variant="info" className="my-3" type="submit" value="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default PostForm;
