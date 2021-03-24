import React, { useEffect } from "react";
// router
import { useParams } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../redux/actions/postActions";
// components
import MyEditor from "./MyEditor";
// styles
import styles from "./Editor.module.scss";

const MyComponents = () => {
  const posts = useSelector((state) => state.postReducer.posts);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(getUserPosts(params.id));
  }, []);

  return posts?.length > 0 ? (
    <div className={styles.wrapper}>
      {posts.map((post, id) => (
        <div className={styles.post_container}>
          <div className={styles.post_info}>
            <h5>{post.title}</h5>
          </div>
          <MyEditor key={id} post={post} />
        </div>
      ))}
    </div>
  ) : (
    <div style={{ color: "#fff" }}> You didn't post anything yet!</div>
  );
};

export default MyComponents;
