

//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import DummyData from '../../dummy-data';

const PostsPage = () => {
  const [data, setData] = useState(DummyData);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map((element, id) => {
        return <Post post={element} key={id} />
      })}
    </div>
  );
};

export default PostsPage;

























// //Complete the necessary code in this file
// // import useState

// import React , {useState} from "react";
// import Post from "./Post";
// import CommentSection from "../CommentSection/CommentSectionContainer";
// import LikeSection from "./LikeSection";
// import PostHeader from "./PostHeader";
// import dummyData from "../../dummy-data";
// // import dummyData from "../../dummy-data";
// import "./Posts.css";


// const PostsPage = () => {

// //  const [like, setLikes] = useState ({dummyData}); 
//   const [post, setPost] = useState(dummyData);
//   // const [like, setLike] = useState(dummyData.likes);
    

//   //     function addOne (){
//   //       setLike(`${like + 1}`)
//   //       console.log(like);
//   //       return like
//   //       }
    
//   return (
//     <div className="posts-container-wrapper">
//       {post.map((element, id) => {
//         return ( 
//            <div>
//              <div className="post-border">
//             <PostHeader
//             key={id.Header}
//             username = {element.username}
//             thumbnailUrl = {element.thumbnailUrl} />

//             <Post
//                 key={id.Post}
//                 src = {element.imageUrl} />
              
//           </div>
//             <LikeSection
           
//             key={id.LikeSection}
//             data = {post}
//             // likeNumber = {like}
//             // setLike= {setLike}
//             />

//             <CommentSection 
//              key={id.CommentSection}
//              postId={element.imageUrl}
//              comments={element.comments}
//             />
//       </div>
              
         
    
//         )})
// }
// </div>
// )
// }


// export default PostsPage;


{/* return (
   <div className="posts-container-wrapper">
    {dummyData.map(element => { */}
{/* //       return ( 
//         <div key={element.id}>
//           <Post />
//         </div>
//     )}
//    )
  
//       }</div>)
// }; */}












// like section: 
// clickHandler={addOne} 
//                   likeNumber={element.likes}

// { <PostHeader
//         username={props.post.username}
//         thumbnailUrl={
//           props.post.thumbnailUrl
//         }
//       /> 

 // console.log(count);
  
  // set up state for your data














  // .map(hearts =>{
  //   return hearts.likes






















// import React, {useState} from "react";
// import Post from "./Post";
 
// import "./Posts.css";
// import dummyData from "../../dummy-data";






// // import data 
// const PostsPage = (prop) => {
//   // set up state for your data
// const [state, setState] = useState (""); 
//   return (
//     <div className="posts-container-wrapper">
//       <div className="posts-container">
//         <div className="post-border">
//           {dummyData.map ((item)=> {
//             return <p className="post-text">username={item.username}
//             thumbnailUrl={item.thumbnailUrl}
//               <img
//                 alt="post thumbnail"
//                 className="post-image"
//                 src={item.imageUrl}
//               />
//             likes={item.likes}            
//             postId={item.imageUrl}
//             comments={item.comments}
//             </p>;
//           })}
//           </div>
//         </div>
//         {/* map through data here to return a Post and pass data as props to Post */}
//       </div>
//   );
// };

// export default PostsPage;








/*{dummyData.map ((item)=> {
  return <p className="post-text">Username: {item.username} 
  thumbnailUrl: {item.thumbnailUrl} 
  imageUrl: {item.imageUrl}
  Like? {item.likes}
  timestamp: {item.timestamp}</p>
 })}







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
    <LikeSection likes={props.post.likes}/>
    <CommentSection
      postId={props.post.imageUrl}
      comments={props.post.comments}
    />
  </div>
);




// const Post = props => {
//   // set up state for the likes
//   const [likes, setLikes] = useState(props.post.likes)
//   const incrementLike = () => {
//     setLikes(likes + 1);
//   }
// new messages
// 7:12
// <div className="like-section-wrapper" onClick={props.incrementLike}>*/