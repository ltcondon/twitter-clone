import { DateRangeOutlined, EmojiEmotionsOutlined, GifBoxOutlined, InsertPhotoOutlined, PersonPinCircleOutlined, PollOutlined } from '@mui/icons-material';
import { Avatar, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Tweetbox.css'
import { useDispatch } from 'react-redux'
import { createPost } from './actions/posts';

function Tweetbox() {
  const user = 'Keem London'
  const username = 'keemlondon'
  const [postData, setPostData] = useState({ message: '', tags: '', selectedFile: '', user: user, username: username, isVerified: true })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.stopPropagation()
    dispatch(createPost({...postData, createdAt: new Date().toUTCString()}))
    setPostData({...postData, message: ''})
  }

  return <div className='tweetbox'>
    <form>
      <div className='tweetbox__input'>
        <Avatar className='avatar' src="https://static.timesofisrael.com/jewishchronicle/uploads/2017/07/H9OI_curb_your_enthusiasm_larry_david.jpg"/>

        <TextField 
          fullWidth 
          variant="outlined" 
          placeholder="What's Happening?" 
          value={postData.message} 
          onChange={(e) => setPostData({...postData, message: e.target.value})}
          onSubmit={handleSubmit}
        />

      </div>
      <div className='tweetbox__widgets'>
        <InsertPhotoOutlined fontSize='small' className='tweetbox__widget' />
        <GifBoxOutlined fontSize='small' className='tweetbox__widget' />
        <PollOutlined fontSize='small' className='tweetbox__widget' />
        <EmojiEmotionsOutlined fontSize='small' className='tweetbox__widget' />
        <DateRangeOutlined fontSize='small' className='tweetbox__widget' />
        <PersonPinCircleOutlined fontSize='small' className='tweetbox__widget' />
        <Button className='tweetbox__tweetButton' onClick={handleSubmit}>Tweet</Button>
      </div>
    </form>
  </div>;
}

export default Tweetbox;
