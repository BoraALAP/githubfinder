import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ({ title= 'Github Finder' }) => {
  return (
    <nav className="navbar bg-primary">
      <h1><i className="fab fa-github"/> {title}</h1>
      <ul>
      <li><Link to="/">Home</Link></li> 
      <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
