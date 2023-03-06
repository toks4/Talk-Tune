import { Link, NavLink } from "react-router-dom";   // <== IMPORT
import {SessionContext} from "../contexts/SessionContext";

import React, { useContext } from 'react'

function NavBar() {

  const {logoutFunction} = useContext(SessionContext)

  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home </Link> 
        <Link to="/signup"> Signup </Link> 
        <Link to="/login"> Login </Link>
        <Link to="/explore"> Explore </Link>
        <button onClick={logoutFunction}>Logout</button>

      </ul>
    </nav>
  )
}

export default NavBar