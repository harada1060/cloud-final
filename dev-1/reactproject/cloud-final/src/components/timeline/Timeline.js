import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Timeline() {
  return (
    <div className="timeline">
      {/* header */}
      <div className="timeline__header">
        <h2>ホーム</h2>
      </div>
      {/* tweetbox */}
      <TweetBox />
      {/* post */}
      <Post
        displayName="プログラミングチュートリアル"
        username="Shin_Engineer"
        verfide={true}
        text="初めてのツイート"
        avater="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}

export default Timeline;
