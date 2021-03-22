import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/postsActions";
import MyEditor from "./../mycomponents/MyEditor";
import styles from "./Discover.module.scss";

const DiscoverSection = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getAllPosts());
    console.log("RENDERING POSTS");
  }, []);

  return (
    <div>
      <h1 style={{ color: "#fff" }}>Render all users posts</h1>
      <div className={styles.wrapper}>
        {posts?.map((post, id) => (
          <MyEditor key={id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
