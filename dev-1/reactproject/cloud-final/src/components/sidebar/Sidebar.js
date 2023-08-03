import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";
import sendTweet from "../timeline/TweetBox"
function sidebar() {
  return (
    <div className='sidebar'>
        {/* アイコン*/ }
        <CloudIcon className="sidebar__icon"/>


        {/*sidebar option */}
        <SidebarOption text="ホーム" Icon={HomeIcon} active/>
        <SidebarOption text="検索" Icon={SearchIcon} />
        <SidebarOption text="通知" Icon={NotificationsActiveIcon}/>
        <SidebarOption text="メッセージ" Icon={ChatBubbleIcon}/>
        <SidebarOption text="ブックマーク" Icon={BookmarksIcon}/>
        <SidebarOption text="リスト" Icon={ListIcon}/>
        <SidebarOption text="プロフィール" Icon={AccountCircleIcon}/>
        <SidebarOption text="もっと見る" Icon={MoreHorizIcon}/>
        {/*sidebar option */}
        {/*sidebar option */}
        {/*sidebar option */}
        {/*sidebar option */}
        {/*sidebar option */}

        {/*　投稿ボタン */}
        <Button variant="outlined" className='sidebar__tweet'fullWidth>投稿する</Button>

      
    </div>
  )
}

export default sidebar
