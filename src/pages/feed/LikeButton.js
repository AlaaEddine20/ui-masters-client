import React from "react";

const LikeButton = ({ isLiked, handleLike, handleUnLike, post }) => {
  return (
    <>
      {isLiked ? (
        <i className="fas fa-heart" onClick={() => handleUnLike(post._id)}></i>
      ) : (
        <i className="far fa-heart" onClick={() => handleLike(post._id)}></i>
      )}
    </>
  );
};

export default LikeButton;
