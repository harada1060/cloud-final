import React, { useEffect, useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import FlipMove from "react-flip-move";

function Timeline() {
  const [posts, setPost] = useState([]);


  useEffect(() => {
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp","desc"));
    //getDocs(q).then((querySnapshot) => {
    //  setPost(querySnapshot.docs.map((doc) => doc.data()));
    //});
    /*リアルタイムでデータを取得*/

    onSnapshot(q, (querySnapshot) => {
      setPost(querySnapshot.docs.map((doc) => doc.data()));
    });
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
      <FlipMove >
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
      </FlipMove>
    </div>
  );
}

export default Timeline;
