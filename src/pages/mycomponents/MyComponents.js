import React, { useEffect } from "react";
// router
import { useParams } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts, deletePost } from "../../redux/actions/postActions";
// components
import MyEditor from "./MyEditor";
// styles
import styles from "./Editor.module.scss";

const MyComponents = () => {
  const myPosts = useSelector((state) => state.postReducer.userPosts);
  console.log(myPosts);

  const dispatch = useDispatch();

  const userId = useParams();

  const deletePostFunction = (postId) => {
    dispatch(deletePost(postId));
  };

  useEffect(() => {
    dispatch(getUserPosts(userId.id));
  }, []);

  return myPosts?.length > 0 ? (
    <div className={styles.wrapper}>
      {myPosts.map((post, idx) => (
        <div key={idx} className={styles.post_container}>
          <div className={styles.post_info}>
            <h5>{post.title}</h5>
          </div>
          <MyEditor
            postId={post._id}
            post={post}
            deletePostFunction={deletePostFunction}
          />
        </div>
      ))}
    </div>
  ) : (
    <div style={{ color: "#fff" }}> You didn't post anything yet!</div>
  );
};

export default MyComponents;
