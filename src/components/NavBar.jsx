import { Button } from "react-bootstrap";
import React, { useContext } from 'react'
import '/src/App.css';
import {SessionContext} from "../contexts/SessionContext";
import { Link } from 'react-router-dom';
import { Search } from 'antd';

  function NavBar() {
  
    const {logoutFunction} = useContext(SessionContext)
    const { token } = useContext(SessionContext)
  
    return (
      <div>
      <nav>
      <Link to='/'><img class='logo' src="src/assets/logo.png" width='400px' height='200px' alt="logo"/></Link>
      <div>
      <ul id="navbar">
      <li><a href="/">Home</a></li>
      <li><a href="/profile">Profile</a></li>
      <li><a href="/explore">Explore</a></li>
      <li><a href="/signup">Signup</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/about">About</a></li>
      </ul>
      </div>
      <div id="mobile-nav">
        <i id="bar" className= 'fas fa-times'></i>
      </div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <button onClick={logoutFunction}>Logout</button>
    </nav>
  </div>
    )
  }

  export default NavBar