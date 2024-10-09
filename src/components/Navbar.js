import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const AppNavbar = () => {
  const styles = {
    navbar: {
      padding: '1rem',
      backgroundColor: '#343a40',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    brand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#f8f9fa',
      textTransform: 'uppercase',
    },
    link: {
      fontSize: '1rem',
      color: '#f8f9fa',
      marginLeft: '1rem',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#ffc107',
      textDecoration: 'underline',
    },
    dropdown: {
      color: '#f8f9fa',
      fontSize: '1rem',
    },
    dropdownItem: {
      color: '#343a40',
    },
    dropdownItemHover: {
      backgroundColor: '#ffc107',
      color: '#fff',
    },
  };

  return (
    <Navbar style={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={styles.brand}>
          Scholarship Platform
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" style={styles.link}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" style={styles.link}>
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" style={styles.link}>
              Dashboard
            </Nav.Link>
            <NavDropdown title="Admin" id="admin-nav-dropdown" style={styles.dropdown}>
              <NavDropdown.Item as={Link} to="/manage-scholarships" style={styles.dropdownItem}>
                Manage Scholarships
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/track-applications" style={styles.dropdownItem}>
                Track Applications
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
