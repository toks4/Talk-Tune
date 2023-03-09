import React from 'react'
import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'
import "../Navbar.css"



function NavBar() {
    
 

  const {logoutFunction} = useContext(SessionContext)
  const { token } = useContext(SessionContext)


  return (

    <>
    <nav>
      <a href="#"><img src="src/assets/logo.png" width='200px' height='200px'alt="logo"/></a>
      <div>
      <ul id="navbar">
      <li><a href="/">Home</a></li>
      <li><a href="/">Profile</a></li>
      <li><a href="/">Explore</a></li>
      <li><a href="/">Signup</a></li>
      <li><a href="/">Login</a></li>
      <li><a href="/">About</a></li>
      </ul>
        
      </div>
      <div id="mobile-nav">
        <i className="fas fa-bars"></i>
      </div>
      
    </nav>







    </>
   
   
   
   
   
   
   )
  }

   
   
   

 













   


export default NavBar