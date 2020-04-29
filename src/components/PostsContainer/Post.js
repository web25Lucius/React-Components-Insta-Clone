
// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  const [likes, setLikes] = useState (props.post.likes);
  console.log('props we passed from PostPage into post.js', props.post.likes);
  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes = {likes} setLikes={setLikes} />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;


























// You will add code in this file
// import React from "react";
// import React from "react";
// import CommentSection from "../CommentSection/CommentSectionContainer";
// import LikeSection from "./LikeSection";
// import PostHeader from "./PostHeader";



// import "./Posts.css";



// const Post = props => {

//   return (
//     // <div className="post-border">
//     //         <PostHeader />
//           <div className="post-image-wrapper">
//             <img
//               alt="post thumbnail"
//               className="post-image"
//               src={props.imageUrl}/>
              
//           </div>
//             //{/* <LikeSection />
//             //<CommentSection /> */}
//       // </div>
//       )
                
//       };
    
    
   
  
// ;

// export default Post;
















// postId={props.imageUrl}
// comments={props.comments}







// pass props in this file to
// const Post = props => {
//   const [count, setCount] = useState(dummyData);
//   function addOne (){
//     setCount(count.props.likes + 1)
    
//     console.log(`this is the ${count}`);
//     return count
//     }


//   return (
//     <div className="post-border">
      
//       {dummyData.map(element => {
//         return  (
//           <div key={dummyData.id}>
//             <PostHeader 
//                       username = {element.username}
//                       thumbnailUrl = {element.thumbnailUrl}
//             />
//           <div className="post-image-wrapper">
//             <img
//               alt="post thumbnail"
//               className="post-image"
//               src={element.imageUrl}/>
              
//           </div>
//             <LikeSection 
//                 clickHandler = {addOne}
//                 likeNumber={element.likes}
//             />
//             <CommentSection
//               postId={element.imageUrl}
//               comments={element.comments}
//             />
//       </div>
//       )
                
//       })};
//     </div>
    
   
  
//   )};

// export default Post;




// let digits = [];
//   {dummyData.map(lNum => {
//     return (
//       digits.push(lNum.likes)
//     );
//   } )}




// {/* <PostHeader
//         username={props.post.username}
//         thumbnailUrl={
//           props.post.thumbnailUrl
//         }
//       /> */}






// import React, {useState} from "react";
// import CommentSection from "../CommentSection/CommentSectionContainer";
// import LikeSection from "./LikeSection";
// import PostHeader from "./PostHeader";
// import "./Posts.css";

// // pass props in this file to
// const Post = props => {
//   // set up state for the likes
//   const [like, setlike] = useState(props.post.likes); 
  
//   return (
//     <div className="post-border">
//       <PostHeader
//         username={props.post.username}
//         thumbnailUrl={
//           props.post.thumbnailUrl
//         }
//       />
//       <div className="post-image-wrapper">
//         <img
//           alt="post thumbnail"
//           className="post-image"
//           src={props.post.imageUrl}
//         />
//       </div>
//       <LikeSection likes={props.post.likes}/>
//       <CommentSection
//         postId={props.post.imageUrl}
//         comments={props.post.comments}
//       />
//     </div>
//   );
// };

// export default Post;










// const Post = props => {
//   // set up state for the likes
//   const [likes, setLikes] = useState(props.post.likes)
//   const incrementLike = () => {
//     setLikes(likes + 1);
//   }
// new messages
// 7:12
// <div className="like-section-wrapper" onClick={props.incrementLike}>