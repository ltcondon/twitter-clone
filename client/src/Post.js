import { ChatBubbleOutline, FavoriteBorderOutlined, Repeat, Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return <div className='post'>
      <div className='post__avatar'>
          <Avatar className='avatar' src='https://avatars.githubusercontent.com/u/35811826?v=4'/>
      </div>
      <div className='post__body'>
        <div className='post__header'>
            <div className='post__headerText'>
                <h3>Keem London {' '} <Verified className='post__badge' /> {' '}
                    <span className='post__username'>@keemlondon</span>
                </h3>
            </div>
            <div className='post__headerDescription'>
                <p>This is gonna work at some point I swear</p>
            </div>
        </div>
        <img src="https://pbs.twimg.com/media/FK3h7iQWYAMZjJC?format=jpg&name=medium" alt=''/>
        <div className='post__footer'>
            <ChatBubbleOutline fontSize='small'/>
            <Repeat fontSize='small'/>
            <FavoriteBorderOutlined fontSize='small'/>
            <ChatBubbleOutline fontSize='small'/>
        </div>
      </div>
  </div>;
}

export default Post;
