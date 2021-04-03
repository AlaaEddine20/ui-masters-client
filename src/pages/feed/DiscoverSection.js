import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/postsActions";
import MyEditor from "./MyEditor";
import styles from "./Discover.module.scss";
import { Container } from "react-bootstrap";
import LikeButton from "./LikeButton";

const DiscoverSection = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <Container>
      <div className={styles.wrapper}>
        {posts?.map((post, id) => (
          <div key={id} className={styles.post_container}>
            <div className={styles.post_info}>
              <h5>{post.title}</h5>
              <span className="mr-2">Posted by</span>
              <span className={styles.username}>
                {post.user?.name} {post.user?.lastname}
              </span>
              <span className="ml-1">
                <img src={post.user?.profilePic} alt="profile-pic" />
              </span>
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
