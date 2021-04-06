import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getAllPosts } from "../../redux/actions/postsActions";
import { Container } from "react-bootstrap";
import MyEditor from "./MyEditor";
import LikeButton from "./LikeButton";
import ClickedUser from "../profile/ClickedUser";
import styles from "./Discover.module.scss";
import axios from "axios";

const DiscoverSection = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const getCurrentUser = (currentUserId) => {
    history.push(`/user/${currentUserId}`);
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        {posts?.map((post, id) => (
          <div key={id} className={styles.post_container}>
            <div className={styles.post_info}>
              <h5>{post.title}</h5>
              <span className="mr-2">Posted by</span>
              <div
                onClick={() => getCurrentUser(post.user._id)}
                className={styles.user_info}
              >
                <div className={styles.username}>
                  {post.user?.name} {post.user?.lastname}
                </div>
                <div className="ml-1">
                  <img src={post.user?.profilePic} alt="profile-pic" />
                </div>
              </div>
              <div className={styles.likes_container}>
                <LikeButton post={post} />

                <span style={{ color: "#fff", padding: "0 5px" }}>
                  {post?.likes.length}
                </span>
              </div>
            </div>
            <MyEditor post={post} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DiscoverSection;
