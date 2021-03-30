import React from "react";

const LikeButton = ({ isLiked, addLike, unLike, post }) => {
  return (
    <>
      {isLiked ? (
        <i className="fas fa-heart" onClick={() => unLike(post._id)}></i>
      ) : (
        <i className="far fa-heart" onClick={() => addLike(post._id)}></i>
      )}
    </>
  );
};

export default LikeButton;
