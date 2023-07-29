import { Avatar } from '@mui/material'
import React from 'react'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import "./Post.css"

function Post() {
  return (
    <div className='post'>
      <div className='post--avatar'>
        <Avatar />
      </div>
      <div className='post--body'>
        <div className='post--header'>
            <div className='post--headertext'>
                <h3>クラウドプラットフォーム最終課題
                <span className='post--headerSpecial'>
                    <VerifiedUser  className="post--badge" />
                    @Cloud-Final
                </span>
                </h3>
            </div>
            <div className='post--headerDescription'>
                <p>クラウドプラットフォーム最終課題なう。</p>
            </div>
        </div>
        <img src="https://source.unsplash.com/random" />
        <div className='post--footer'>
            <ChatBubbleOutline fontSize='small'/>
            <Repeat fontSize='small'/>
            <FavoriteBorder fontSize='small'/>
            <PublishOutlined fontSize='small'/>
        </div>
      </div>
    </div>
  )
}

export default Post
