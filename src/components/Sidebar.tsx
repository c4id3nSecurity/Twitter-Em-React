import './Sidebar.css'
import twitterLogo from '../assets/twitter-logo.svg'
import { Bell, BookmarksSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Sidebar(){
  return(
  <aside className="sidebar">
    <img className="logo" src={twitterLogo} alt="Logo-Twitter" />
    <nav className="main-navigation">
      <NavLink to="/">
        <House weight="fill" /> <span></span>
      </NavLink>
      <a href=""> <Hash /><span>Explore</span></a>
      <a href=""> <Bell /><span>Notifications</span></a>
      <a href=""><Envelope /><span>Messages</span></a>
      <a href=""><BookmarksSimple /><span>Bookmarks</span></a>
      <a href=""><FileText /><span>Lists</span>
      </a>
      <a href="">
        <User /> 
        <span>Profile</span>
      </a>
      <a href="">
        <DotsThreeCircle /> 
        <span>More</span>
      </a>
    </nav>
    <button className="new-tweet" type="button">
      <Pencil/>
      <span>Tweet</span>
    </button>
  </aside>
  )
}