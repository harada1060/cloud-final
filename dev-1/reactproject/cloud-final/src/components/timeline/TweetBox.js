import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    /*firebaseのデータベースにデータを追加する*/
    e.preventDefault();

    addDoc(collection(db, "posts"),{
      displayName: "マスカットメガネ",
      username: "Cloud-Final",
      verfide: true,
      text: tweetMessage,
      avatar: "https://lh3.googleusercontent.com/pw/AIL4fc8EW1iHxMksKsQUm8CvVedjgk2W7AqhnkZM6gndet-Pfpazue0OnJsTrjyQFI51s_TH3iI4p1RjWOaVK_YF2lMPN_DGPk4sRmdCKzsnFm5FaJ-BuHNPrnMbMah5MLWovVmN_BRwGmlrmgWl4uSAQGb0=w600-h600-s-no?authuser=1",
      image: tweetImage,
      timestamp: serverTimestamp(),
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input
          value={tweetMessage}
            placeholder="今どうしてる？？？？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
        value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button className="tweetBox--tweetButton" type="submit"
        onClick={sendTweet}>
          投稿する
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
