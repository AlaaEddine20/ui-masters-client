import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/postsActions";
import MyEditor from "./MyEditor";
import styles from "./Discover.module.scss";

const DiscoverSection = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <h3 style={{ color: "#fff" }}>Discover other Devs components</h3>
        {posts?.map((post, id) => (
          <div className={styles.post_container}>
            <div className={styles.post_info}>
              <h5>{post.title}</h5>
              Posted by <span>{post.user.name}</span>
              <span>
                <img src={post.user.profilePic} alt="profile-pic" />
              </span>
            </div>
            <MyEditor key={id} post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DiscoverSection;
