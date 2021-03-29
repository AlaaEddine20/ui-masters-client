import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/postsActions";
import { likePost, unLikePost } from "../../redux/actions/postActions";
import MyEditor from "./MyEditor";
import styles from "./Discover.module.scss";
import { Container } from "react-bootstrap";
import LikeButton from "./LikeButton";

const DiscoverSection = () => {
  const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  // const isLoading = useSelector((state) => state.postReducer.isLoading);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const handleLike = (postId) => {
    dispatch(likePost(postId));
    setIsLiked(true);
  };

  const handleUnLike = (postId) => {
    dispatch(unLikePost(postId));
    setIsLiked(false);
  };
  // console.log(posts[0].user._id);
  console.log(posts[0].likes);

  // useEffect(() => {
  //   if (posts[0].likes.find((like) => like._id === posts[0].user._id)) {
  //     setIsLiked(true);
  //   }
  // }, [posts[0].likes, posts[0].user._id]);

  return (
    <Container fluid>
      <div className={styles.wrapper}>
        <h3 style={{ color: "#fff" }}>Discover other Devs components</h3>
        {posts?.map((post, id) => (
          <div key={id} className={styles.post_container}>
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
                <LikeButton
                  isLiked={isLiked}
                  post={post}
                  handleLike={handleLike}
                  handleUnLike={handleUnLike}
                />

                <span style={{ color: "#fff", padding: "0 5px" }}>
                  {post.likes.length}
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
