import React from 'react';
import "./Feed.css"
import Post from './Post';
import Tweetbox from './Tweetbox';
import { useSelector } from 'react-redux';


function Feed() {
  const posts = useSelector((state) => state.posts)
  console.log(posts)

  return <div className='feed'>
    <div  className='feed__header'>
        <h2>Home</h2>
    </div>

    <Tweetbox />

    <Post />
    <Post />
    <Post />
    <Post />

  </div>;
}

export default Feed;
