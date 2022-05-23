import React  from 'react';
import {Navbar , Nav , Container} from 'react-bootstrap'

function NavBar() {
  return(
    <Navbar bg="dark" variant="dark" >
      <Container fluid>
        <Navbar.Brand href="#titulo">Match Gamer</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;