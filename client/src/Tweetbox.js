import { DateRangeOutlined, EmojiEmotionsOutlined, GifBoxOutlined, InsertPhotoOutlined, PersonPinCircleOutlined, PollOutlined } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import React from 'react';
import './Tweetbox.css'

function Tweetbox() {
  return <div className='tweetbox'>
    <form>
      <div className='tweetbox__input'>
        <Avatar src="https://static.timesofisrael.com/jewishchronicle/uploads/2017/07/H9OI_curb_your_enthusiasm_larry_david.jpg"/>
        <input placeholder="What's Happening?" type='text'></input>
      </div>
      <div className='tweetbox__widgets'>
        <InsertPhotoOutlined fontSize='small' />
        <GifBoxOutlined fontSize='small' />
        <PollOutlined fontSize='small' />
        <EmojiEmotionsOutlined fontSize='small' />
        <DateRangeOutlined fontSize='small' />
        <PersonPinCircleOutlined fontSize='small' />
        <Button className='tweetbox__tweetButton'>Tweet</Button>
      </div>
    </form>
  </div>;
}

export default Tweetbox;
