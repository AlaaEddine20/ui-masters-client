import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../../components/sidebar/SideBar";
import { addPost } from "../../redux/actions/postActions";
import styles from "./Home.module.scss";

const Home = () => {
  const [postData, setPostData] = useState({
    name: "",
    title: "",
    description: "",
    code: "",
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
    <div className={styles.container}>
      <SideBar />
      <div className={styles.home_right}>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          className={styles.form_wrapper}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="name here..." />
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Title of the post..."
            />
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Code</Form.Label>
            <Form.Control name="code" as="textarea" rows={3} />
          </Form.Group>
          <Button className="my-3" type="submit" value="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
