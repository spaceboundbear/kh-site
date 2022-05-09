import React, { useState } from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="white"
      variant="light"
      className="sticky-top"
    >
      <Container>
        <Link to={`/home`}>
          <Navbar.Brand>NavTest</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="justify-content-end mx-md-0">
            <Link
              onClick={() => setExpanded(false)}
              className="nav-link hover"
              to="/SenderoCrossing"
            >
              Sendero Crossing
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              className="nav-link hover"
              to="/SchuettigRd"
            >
              Schuettig Rd
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              className="nav-link hover"
              to="/BriteOaks"
            >
              Brite Oaks
            </Link>
            <Link
              onClick={() => setExpanded(false)}
              className="nav-link hover"
              to="/SummitOrchards"
            >
              Summit Orchards
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
