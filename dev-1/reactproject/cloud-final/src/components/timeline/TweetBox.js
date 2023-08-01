import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input
            placeholder="今どうしてる？？？？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          className="tweetBox--imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
        ></input>
        <Button className="tweetBox--tweetButton" type="submit">
          投稿する
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
