import { ChatBubbleOutline, FavoriteBorderOutlined, Repeat, Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from './actions/posts';
import './Post.css'


function Post(props) {
    const dispatch = useDispatch()
    const handleLike = (e) => {
        dispatch(likePost(post._id))
        setPostData({ ...postData, likeCount: post.likeCount += 1})
    }
    const post = props.postData
    const [postData, setPostData] = useState({ likeCount: post.likeCount })

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
            <ChatBubbleOutline fontSize='small' className='post__widget'/>
            <Repeat fontSize='small' className='post__widget'/>
            <div className='post__widgetRow post__widget' onClick={handleLike}>
                <FavoriteBorderOutlined fontSize='small'/>
                <span className='post__likeCount'>{post.likeCount}</span>
            </div>
            <ChatBubbleOutline fontSize='small' className='post__widget'/>
        </div>
      </div>
  </div>;
}

export default Post;
