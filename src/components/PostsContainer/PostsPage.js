//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 
const PostsPage = (prop) => {
  // set up state for your data
const [state, setState] = useState (""); 
  return (
    <div className="posts-container-wrapper">
      {dummyData.map ((item)=> {
        return <div className="post-border">
                <p className="post-text" postText={item.prop}/>
                </div>
      })}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

