import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, likePost } from "../../redux/actions/postsActions";
import MyEditor from "./MyEditor";
import styles from "./Discover.module.scss";
import { Container } from "react-bootstrap";

const DiscoverSection = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  // const isLoading = useSelector((state) => state.postReducer.isLoading);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  console.log(posts[0].likes);

  return (
    <Container fluid>
      <div className={styles.wrapper}>
        <h3 style={{ color: "#fff" }}>Discover other Devs components</h3>
        {posts?.map((post, id) => (
          <div className={styles.post_container}>
            <div className={styles.post_info}>
              <h5>{post.title}</h5>
              <span className="mr-2">Posted by</span>
              <span className={styles.username}>
                {post.user.name} {post.user.lastname}
              </span>
              <span className="ml-1">
                <img src={post.user.profilePic} alt="profile-pic" />
              </span>
              <div className={styles.likes_container}>
                <button
                  onClick={() =>
                    dispatch(likePost(post._id), () => {
                      console.log(post._id);
                    })
                  }
                >
                  <i className="far fa-heart"></i>
                  <span style={{ color: "#fff", padding: "0 5px" }}>
                    {post.likes.length}
                  </span>
                </button>
              </div>
            </div>
            <MyEditor key={id} post={post} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DiscoverSection;
