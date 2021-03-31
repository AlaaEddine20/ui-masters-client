import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/postsActions";
// import { likePost, unLikePost } from "../../redux/actions/postActions";
import MyEditor from "./MyEditor";
import styles from "./Discover.module.scss";
import { Container } from "react-bootstrap";
import LikeButton from "./LikeButton";
import axios from "axios";
import { POST_LIKED, POST_UNLIKED } from "../../redux/constants/postConstants";

const DiscoverSection = () => {
  const [likes, setLikes] = useState([]);

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const addLike = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const body = JSON.stringify({ postId: id });

    const res = await axios.post(
      "http://localhost:8000/posts/like",
      body,
      config
    );

    console.log(res.data.post.likes[0]._id);
    //setIsLiked(true);
    setLikes(res.data.post.likes);
    dispatch({
      type: POST_LIKED,
      payload: {
        _id: id,
      },
    });
  };

  const unLike = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const res = await axios.delete(
        "http://localhost:8000/posts/like/" + id,
        config
      );

      dispatch({
        type: POST_UNLIKED,
        payload: {
          _id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const handleLike = (postId) => {
  //   dispatch(likePost(postId));
  //   setIsLiked(true);
  // };

  // const handleUnLike = (postId) => {
  //   dispatch(unLikePost(postId));
  //   setIsLiked(false);
  // };

  return (
    <Container>
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
                <LikeButton post={post} addLike={addLike} unLike={unLike} />

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
