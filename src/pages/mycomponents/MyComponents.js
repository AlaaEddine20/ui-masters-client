import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../redux/actions/postActions";
import MyEditor from "./MyEditor";
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
