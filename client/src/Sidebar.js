import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Twitter, Home, Search, Notifications, MailOutline, ListAlt, BookmarkBorder, MoreHoriz, PermIdentity } from '@mui/icons-material';
import { Button } from '@mui/material';

function Sidebar() {
  return <div className='sidebar'>
      {/* Twitter icon */}
        <Twitter className='sidebar__twitterIcon'/>

      {/* SidebarOptions */}
        <SidebarOption Icon={Home} active text='Home'/>
        <SidebarOption Icon={Search} text='Explore' />
        <SidebarOption Icon={Notifications} text='Notifications' />
        <SidebarOption Icon={MailOutline} text='Messages' />
        <SidebarOption Icon={BookmarkBorder} text='Bookmarks' />
        <SidebarOption Icon={ListAlt} text='Lists' />
        <SidebarOption Icon={PermIdentity} text='Profile' />
        <SidebarOption Icon={MoreHoriz} text='More' />

      {/* TweetButton */}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
  </div>;
}

export default Sidebar;
