import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost, retweetPost } from './actions/posts';

import { ChatBubbleOutline, FavoriteBorderOutlined, Repeat, Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import RetweetModal from './RetweetModal';

import './Post.css'


function Post(props) {
    const dispatch = useDispatch()
    const post = props.postData
    const [postData, setPostData] = useState({ likeCount: post.likeCount })
    const [modalIsOpen, setIsOpen] = useState(false);
    const [retweetData, setRetweetData] = useState({ retweetCount: post.retweetCount ? post.retweetCount : 0 })

    function openFromParent() {
        setIsOpen(true);
    }

    function handleCloseModal(event, data) {
        console.log(event, data);
        if (data.retweet) {
            dispatch(retweetPost(post._id))
            setRetweetData({ ...retweetData, retweetCount: post.retweetCount ? post.retweetCount += 1 : 1})
        }
        setIsOpen(false);
    }

    function handleAfterOpen(event, data) {
        console.log(event, data);
    }

    const handleLike = (e) => {
        if (!props.isRetweet) {
            dispatch(likePost(post._id))
            setPostData({ ...postData, likeCount: post.likeCount += 1})
        }
    }

    const handleRetweet = (e) => {
        if (!props.isRetweet) {
            openFromParent()
        }
    }

    return <div className={props.isRetweet ? 'retweet' : 'post'}>
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
        <img className={props.isRetweet ? 'retweet__img' : 'post__img'} src="https://pbs.twimg.com/media/FK3h7iQWYAMZjJC?format=jpg&name=medium" alt=''/>
        <div className='post__footer'>
            <ChatBubbleOutline fontSize='small' className='post__widget'/>
            <div className='post__widgetRow post__widget' onClick={handleRetweet}>
                <Repeat fontSize='small' className='post__widget'/>
                <span className='post__likeCount'>{post.retweetCount}</span>
            </div>
            <div className='post__widgetRow post__widget' onClick={handleLike}>
                <FavoriteBorderOutlined fontSize='small'/>
                <span className='post__likeCount'>{post.likeCount}</span>
            </div>
            <ChatBubbleOutline fontSize='small' className='post__widget'/>
        </div>
      </div>
      <RetweetModal
        post={post}
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
        onAfterOpen={handleAfterOpen} />
  </div>;
}

export default Post;
