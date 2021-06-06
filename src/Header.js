import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>

      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title='Name' />
        <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOptions Icon={NotificationsIcon} title='Notification' />
        <HeaderOptions avatar='https://media-exp1.licdn.com/dms/image/C5603AQHwKuGnxLvFzQ/profile-displayphoto-shrink_200_200/0/1609774093871?e=1628121600&v=beta&t=9eQrk5yjFthlg4-DnHVVLaWQeWRE-ttBX_IFdQrEpzo' title='me' />
      </div>
    </div>
  )
}

export default Header
