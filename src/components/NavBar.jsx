import React from 'react'




function NavBar() {
    
 

  const {logoutFunction} = useContext(SessionContext)
  const { token } = useContext(SessionContext)

 
  return (
    <div className="container-fluid">
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
</div>

 













    /*<div>
    <nav className="nav">
        <a href="/" className='nav__brand'>Home</a>
        <ul className="nav__menu">
        <li className='nav__item '>
        <a href='#' className='nav__link'>HomePage</a></li>
        <li className='nav__item '>
        <a href='#' className='nav__link'>signup</a></li>
        <li className='nav__item '>
        <a href='#' className='nav__link'>login</a></li>
        <li className='nav__item '>
        <a href='#' className='nav__link'>explore</a></li>
        <li className='nav__item '>
        <a href='#' className='nav__link'>explore</a></li>
       

        </ul>
        <div className='nav__toggler'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </nav>
    
    </div>*/
  )
}

export default NavBar