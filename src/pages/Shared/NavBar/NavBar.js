import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../context/useAuth';
import './Navbar.css'

const NavBar=() => {
  //destructuring from auth context
    const { user, logout } = useAuth();
    return (
        <div className="mb-2">
            <Navbar fixed="top" className='d-block' collapseOnSelect expand="md" bg="light" variant="light">
  <Container>
            <Navbar.Brand>
              <NavLink to='/home' className='navbar-title'>
               <h2 className='nav-head'>Gamer's<span className='kers'>Chairs</span> </h2>
                </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
                <NavLink className='nav-items fs-6 px-3  py-2 text-dark' to='/home'>Home</NavLink>
                <NavLink className='nav-items fs-6 px-3  py-2 text-dark' to='/products'>Explore</NavLink>
      {user?.email && <NavLink className='nav-items fs-6 px-3  py-2 text-dark' to="/dashboard">Dashboard</NavLink>}
      {user?.email ?
      <Button onClick={logout} className='nav-items fs-6 px-3  py-2 fw-bold text-dark text-start' as={Link} to="/login" variant="light">Logout</Button> :
      <Nav.Link className='nav-items fs-6 px-3  py-2 fw-bold text-dark' as={Link} to="/login">Sign In</Nav.Link>}
      <Navbar.Text>
          <p className='text-danger fw-bold'>{user?.displayName}</p>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default NavBar;