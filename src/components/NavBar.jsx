import {Component } from 'react'
import { useContext } from 'react'
import { render } from 'react-dom'
import { SessionContext } from '../contexts/SessionContext'
import { Link } from 'react-router-dom'
import "../Navbar.css"



function  NavBar (){
  
  /*handleClick = () => {
    this.setState({clicked:!this.state.clicked})
  };*/
  const {logoutFunction} = useContext(SessionContext)
  const { token } = useContext(SessionContext);
    
 

  


  return (

    <>
    <nav>
      <a href="#"><img src="src/assets/logo.png" width='200px' height='200px'alt="logo"/></a>
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
      
    </nav>







    </>
   
   
   
   
   
   
   )
  }

   
   
   
    /* <div className="container-fluid">
    <a className='navbar-brand' href='/'><img src="src/assets/logo.png" width='200px' height='200px'alt="logo"/></a>
       <div className="navbarText">
       </div>
       <Navbar bg="light" expand="lg">
       <Container fluid>
    <Navbar.Toggle className='navBar'/>
    <Navbar.Collapse id="navbarCollapse">
      <ul>
        <Link to="/" className="nav-item"> Home </Link> 
      
          <Link to="/profile" className="nav-item"> Profile </Link>
        <Link to="/explore" className="nav-item"> Explore </Link>
        
          <Link to="/signup" className="nav-item"> Signup </Link> 
        <Link to="/login" className="nav-item"> Login </Link>
        
        
        
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
</div>*/

 













   


export default NavBar