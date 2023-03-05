import { Link } from "react-router-dom";   
import { Form, Button } from "react-bootstrap";
import React from 'react';
import '/src/App.css';

function NavBar() {
  return (
    <nav>
    <div className="Navbar">
 <a class='navbar-brand' href='/'><img src="src/assets/logo.png" width='200px' height='200px'alt="logo"/></a>
      <ul className="NavBar2">
        <Link to="/"> Home </Link> 
        <Link to="/signup"> Signup </Link> 
        <Link to="/login"> Login </Link>
        <Link to="/explore"> Explore </Link>
        <Form className="searchBar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchBarMain"
              onKeyPress={event => {
        if (event.key == "Enter") {
        console.log("Pressed enter");
        }
         }}
          />
            <Button className='searchBtnMain' type='submit'
           onClick={() => {console.log("Clicked Button")}}>Search</Button>
          </Form>
      </ul>
      </div>
    </nav>
    
  )
}

export default NavBar