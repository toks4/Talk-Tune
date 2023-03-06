import { Link } from "react-router-dom";   
import { Form, Button } from "react-bootstrap";
import React, { useContext } from 'react'
import '/src/App.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {SessionContext} from "../contexts/SessionContext";


function NavBar() {

  const {logoutFunction} = useContext(SessionContext)

  return (
    <div className="container-fluid">
    <a class='navbar-brand' href='/'><img src="src/assets/logo.png" width='200px' height='200px'alt="logo"/></a>
       <div className="navbarText">
       </div>
       <Navbar bg="light" expand="lg">
       <Container fluid>
    <Navbar.Toggle className='navBar'/>
    <Navbar.Collapse id="navbarCollapse">
      <ul>
        <Link to="/" className="nav-item"> Home </Link> 
        <Link to="/signup" className="nav-item"> Signup </Link> 
        <Link to="/login" className="nav-item"> Login </Link>
        <Link to="/explore" className="nav-item"> Explore </Link>
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
          <button onClick={logoutFunction}>Logout</button>
      </ul>
      </Navbar.Collapse>
   </Container>
  </Navbar>
</div>
  )
}

export default NavBar