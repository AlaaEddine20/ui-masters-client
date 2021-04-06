import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions/postActions";

const LikeButton = ({ post }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const isLiked = post.likes.find((like) => like._id === user._id);

  const handleClick = () => {
    dispatch(toggleLike(isLiked, post._id, user._id));
  };

  return (
    <>
      <i
      style={{ color: "#fff"}}
        className={isLiked ? "fas fa-heart" : "far fa-heart"}
        onClick={handleClick}
      ></i>
    </>
  );
};

export default LikeButton;
