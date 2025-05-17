import React from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/마루.jpeg"

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} alt="메뉴 아이콘"/>
        <img className="logo" src={logo} alt="로고 아이콘"/>
      </div>
      <div className="nav-middle flex-div">
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="검색 아이콘"/>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt=""/>
        <img src={more_icon} alt=""/>
        <img src={notification_icon} alt=""/>
        <img src={profile_icon} className="user-icon" alt=""/>
      </div>
    </nav>
  )
}

export default Navbar
