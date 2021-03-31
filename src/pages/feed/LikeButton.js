import React, { useState } from "react";
import { useSelector } from "react-redux";

const LikeButton = ({ addLike, unLike, post }) => {
  const user = useSelector((state) => state.userReducer.user);

  const [isLiked, setIsLiked] = useState(
    post.likes.find((like) => like._id === user._id)
  );

  const toggleLike = () => {
    setIsLiked((like) => !like);

    try {
      isLiked ? unLike(post._id) : addLike(post._id);
    } catch (error) {
      setIsLiked((like) => !like);
      console.error(error);
    }
  };

  return (
    <>
      {isLiked ? (
        <i className="fas fa-heart" onClick={toggleLike}></i>
      ) : (
        <i className="far fa-heart" onClick={toggleLike}></i>
      )}
    </>
  );
};

export default LikeButton;
