import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
                <Navbar expand="lg" className="bg-body-tertiary nav-color">
      <Container>
        <Navbar.Brand href="#home"><img src="IMAGES/letterA.png" alt=""  className='letter-a'/>ADN-PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to={'/projects'}>Projects</Nav.Link>
            <Nav.Link as={Link} to={'/skills'}>Skills</Nav.Link>
            <Nav.Link as={Link} to={'/resume'}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
  )
}

export default Header