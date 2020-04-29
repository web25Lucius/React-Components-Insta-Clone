import React from "react";
const LikeButton = props => {
  
  return (
      <div>
      <div className="like-section-wrapper">
        <i onClick={props.clickHandler} className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    <div>
    <p className="like-number" >
      {props.likes} Likes</p>
    </div>
    </div>
  )
};

export default LikeButton;
