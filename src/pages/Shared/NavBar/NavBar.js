import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import './Navbar.css';


const NavBar=() => {
  //destructuring from auth context
    const { user, logout } = useAuth();
    return (
        <div className="mb-4">
<Navbar fixed="top" className='d-block navigation-bar' collapseOnSelect expand="md" variant="dark">
  <Container>
            <Navbar.Brand>
              <NavLink to='/home' className='navbar-title'>
                <img className='img-fluid' src="https://i.ibb.co/MRzsP59/logo1.png" alt="" width="50px"/>
               <h2 className='nav-head d-inline'> Gamer's <span className='kers'>Chairs</span> </h2>
                </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
                <NavLink className='nav-items fs-5 px-3  py-2 text-light' to='/home'>Home</NavLink>
                <NavLink className='nav-items fs-5 px-3  py-2 text-light' to='/products'>Explore</NavLink>
      {user?.email && <NavLink className='nav-items fs-5 px-3  py-2 text-light' to="/dashboard">Dashboard</NavLink>}
      {user?.email ?
      <button onClick={logout} className='fs-5 nav-items py-2 px-3 me-2 fw-bold text-light text-start logout' as={Link} to="/login" >Logout</button> :
      <Nav.Link className='nav-items fs-5 px-3  py-2 fw-bold text-light' as={Link} to="/login">Sign In</Nav.Link>}
      <Navbar.Text>
          <p className='fs-5 ms-3 user-name fw-bold'> {user?.displayName}</p>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<br /><br />
        </div>
    );
};

export default NavBar;