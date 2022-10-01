
import React from 'react'
import logo from '../../logo.png'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

function Header() {
  return (
    <nav className="header">
        <img src={logo} alt="error"></img>
        <div>
            <Link to="/tvshows">TV shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recentlyadded">Recently Added</Link>
            <Link to="/mylist">My List</Link>
        </div>
            <FaSearch/>
    </nav>
  )
}

export default Header