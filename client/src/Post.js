import { ChatBubbleOutline, FavoriteBorderOutlined, Repeat, Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css'

function Post(props) {
  const post = props.postData
  return <div className='post'>
      <div className='post__avatar'>
          <Avatar className='avatar' src='https://avatars.githubusercontent.com/u/35811826?v=4'/>
      </div>
      <div className='post__body'>
        <div className='post__header'>
            <div className='post__headerText'>
                <h3>{post.user} {' '} {post.isVerified ? <Verified className='post__badge'/> : null} {' '}
                    <span className='post__username'>{`@${post.username}`}</span>
                </h3>
            </div>
            <div className='post__headerDescription'>
                <p>{post.message}</p>
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
