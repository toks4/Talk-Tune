import { Link, NavLink } from "react-router-dom";   // <== IMPORT

import React from 'react'

function NavBar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home </Link> 
        <Link to="/signup"> Signup </Link> 
        <Link to="/login"> Login </Link>
        <Link to="/explore"> Explore </Link>

      </ul>
    </nav>
  )
}

export default NavBar