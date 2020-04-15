//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import postData from '../../dummy-data';
// import data 

const PostsPage = () => {
  // set up state for your data
  const [postList, setPostList] = useState(postData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        postList.map(post => {
          return <Post  post={post} key={post.username} />
        })
      }
    </div>
  );
};

export default PostsPage;
