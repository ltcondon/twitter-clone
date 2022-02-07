import { DateRangeOutlined, EmojiEmotionsOutlined, GifBoxOutlined, InsertPhotoOutlined, PersonPinCircleOutlined, PollOutlined } from '@mui/icons-material';
import { Avatar, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import FileBase from 'react-file-base64'
import './Tweetbox.css'
import { useDispatch } from 'react-redux'
import { createPost, getPosts } from './actions/posts';

function Tweetbox() {
  const user = 'Keem London'
  const username = 'keemlondon'
  const [postData, setPostData] = useState({ message: '', tags: '', selectedFile: '', user: user, username: username, isVerified: true })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.stopPropagation()
    dispatch(createPost({...postData, createdAt: new Date().toUTCString()}))
    setPostData({...postData, message: ''})
    dispatch(getPosts())
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

        {/* <div>
          <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
        </div> */}

      </div>
      <div className='tweetbox__widgets'>
        <InsertPhotoOutlined fontSize='small' />
        <GifBoxOutlined fontSize='small' />
        <PollOutlined fontSize='small' />
        <EmojiEmotionsOutlined fontSize='small' />
        <DateRangeOutlined fontSize='small' />
        <PersonPinCircleOutlined fontSize='small' />
        <Button className='tweetbox__tweetButton' onClick={handleSubmit}>Tweet</Button>
      </div>
    </form>
  </div>;
}

export default Tweetbox;
