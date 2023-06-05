import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function ColorSchemesExample() {
  const navigate = useNavigate();

  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate('/event')}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
