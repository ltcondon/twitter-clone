import React from 'react';
import "./Feed.css"
import Post from './Post';
import Tweetbox from './Tweetbox';
import { useSelector } from 'react-redux';

function Feed() {
  const posts = useSelector((state) => state.posts)
  const sortedPosts = posts.slice().sort((a, b) => { return new Date(b.createdAt) - new Date(a.createdAt) })
  console.log('sorted', sortedPosts)

  return <div className='feed'>
    <div  className='feed__header'>
        <h2>Home</h2>
    </div>

    <Tweetbox />

    {sortedPosts.map(p => {
      if (p.user && p.username && p.isVerified) {
        return <Post postData={p} key={p._id}/>
      }
    })}

  </div>;
}

export default Feed;
