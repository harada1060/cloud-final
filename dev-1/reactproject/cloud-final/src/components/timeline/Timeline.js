import React, { useEffect, useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const [posts, setPost] = useState([]);

  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    setPost(querySnapshot.docs.map((doc) => doc.data()));
  });

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) => {
      setPost(querySnapshot.docs.map((doc) => doc.data()));
    });
    console.log("mount");
  }, []);

  return (
    <div className="timeline">
      {/* header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* tweetbox */}
      <TweetBox />
      {/* post */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verfide={post.verfide}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
