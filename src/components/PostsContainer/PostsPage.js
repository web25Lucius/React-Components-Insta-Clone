//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import PostHeader from "./PostHeader"; 
import Post from "./Post";
import LikeSection from "./LikeSection";
import "./Posts.css";
import dummyData from "../../dummy-data";



// import data 
const PostsPage = (prop) => {
  // set up state for your data
const [like, setLike] = useState (""); 
  return (
    <div className="posts-container-wrapper">
      <PostHeader/>
      {dummyData.map ((item)=> {
        return <div className="post-border">
                <p className="post-text">
                {item.username}
                <img src={item.thumbnailUrl}/>
                <img src={item.imageUrl}/>
                <LikeSection  onClick= {()=>{setLike(like+1);}}>{item.like}</LikeSection>
                {item.timestamp}
                </p>
                </div>
      })}
      
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

  