import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = (props) => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <CartWidget></CartWidget>
          <Link className='btn btn-dark' to={'/'}>
            <Navbar.Brand>
              Gus Store 
            </Navbar.Brand>
          </Link>
          
          
          <Nav className="me-auto">
            <Link className='btn btn-dark' to={'/category/smartphones'}>SmartPhones</Link>
            <Link className='btn btn-dark' to={'/category/laptops'}>Laptops</Link>
            <Link className='btn btn-dark' to={'#ofertas'}>Ofertas</Link>
    
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar