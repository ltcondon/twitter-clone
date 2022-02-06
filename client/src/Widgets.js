import './Widgets.css';
import { Search } from '@mui/icons-material';
import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton } from 'react-twitter-embed'

function Widgets() {
  return <div className='widgets'>
    <div className='widgets__input'>
      <Search className='widgets__searchIcon'/>
      <input placeholder="Search Twitter" type='text'/>
    </div>

    <div className="widgets__widgetContainer"> 
      <h2>What's Happening?</h2>

      <TwitterTimelineEmbed 
        sourceType='profile'
        screenName='ChelseaFC'
        options={{ height: 400 }}
      />
      <TwitterShareButton
        url={"https://facebook.com/cleverprogrammer"}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      />
    </div>
  </div>;
}

export default Widgets;
