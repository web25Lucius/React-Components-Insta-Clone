// look at the likes on this component. Right now it is hard coded as <p className= "like-number">.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes

import React, {useState} from "react";
const LikeSection = props => {
  // console.log(props);

  const [count, setCount] = useState(props.likeNumber);
  console.log(count);

  const addOne = () => {
   return setCount(count+ 1)
  };


  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div onClick={props.clickHandler} className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {props.likeNumber} Likes</p>
</div>
  )
};

export default LikeSection;





























// import React, {useState} from "react";

// const LikeSection = props => {
//   const [like, setLike] = useState(0); 
//   return (
//     <div>
//     <div
//       className="like-section"
//       key="likes-icons-container">
//       <div className="like-section-wrapper">
//         <i className="far fa-heart" />
//         <span className="like-number" >like </span>
//       </div>
//       <div className="like-section-wrapperon" onClick= {()=>{ }}>
//         <i className="far fa-comment" />
//       </div>
//     </div>
//   </div>)
// }

// export default LikeSection;















// const Post = props => {
//   // set up state for the likes
//   const [likes, setLikes] = useState(props.post.likes)
//   const incrementLike = () => {
//     setLikes(likes + 1);
//   }
// new messages
// 7:12
// <div className="like-section-wrapper" onClick={props.incrementLike}>