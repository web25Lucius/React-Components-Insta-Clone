//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import PostHeader from "./PostHeader"; 
import "./Posts.css";
import dummyData from "../../dummy-data";
import LikeSection from "./LikeSection";


// import data 
const PostsPage = (prop) => {
  // set up state for your data
const [state, setState] = useState (""); 
  return (
    <div className="posts-container-wrapper">
      <PostHeader/>
      {dummyData.map ((item)=> {
        return <div className="post-border">
                <p className="post-text" postText={item.post}/>
                </div>
      })}
      <LikeSection/>
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

