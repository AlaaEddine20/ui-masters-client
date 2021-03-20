import React, { useEffect } from "react";
// router
import { useParams } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../redux/actions/postActions";
// components
import MyEditor from "./MyEditor";
// styles
import styles from "./MyComp.module.scss";

const MyComponents = () => {
  const posts = useSelector((state) => state.postReducer.posts);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getUserPosts(params.id));
  }, []);

  return (
    <div className={styles.wrapper}>
      {posts?.map((post, id) => (
        <MyEditor key={id} post={post} />
      ))}
    </div>
  );
};

export default MyComponents;
