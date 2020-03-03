// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";

const LikeSection = props => {
  const [like, setLike] = useState(0); 
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container">
      <div className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
  <button className="like-number"   onClick= {()=>{setLike(like+1);}}> {setLike} </button>
  </div>)
}

export default LikeSection;
