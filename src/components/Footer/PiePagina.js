import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetFooter from '../CartWidgetFooter';

const PiePagina = () => {
  return (
    <>
      
      <Navbar  bg="dark" variant="dark">
        <Container>    
          <CartWidgetFooter></CartWidgetFooter>
          <Navbar.Brand href="#home">Gus Store - All rights reserved</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
      
    </>    
  )
}

export default PiePagina