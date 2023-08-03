import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets--input'>
            <Search className='widgets--searchIcon'/>
            <input placeholder='キーワード検索' type="text"/>
        </div>

        <div className='widgets--widgetContainer'>
            <h2>今どうしてる？</h2>

            {/*ライブラリーを追加・追記*/}
            <TwitterTimelineEmbed source="profile" screenName='kaishi_pu' options={{height:600}}/>
            <TwitterTweetEmbed  tweetId={'1680898320003403776'}/>
            
            <TwitterShareButton url='https://twitter.com/kaishi_pu' options={{ text:"クラウド最終課題", via:"kaishi_pu" }}/>
        </div>
      
    </div>
  )
}

export default Widgets
