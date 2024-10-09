import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center" style={styles.heroSection}>
        <Container>
          <h1 style={styles.heroTitle}>Welcome to the Scholarship Platform</h1>
          <p style={styles.heroSubtitle}>
            Find scholarships and financial aid opportunities to support your education.
          </p>
          <Link to="/signup">
            <Button variant="primary" size="lg" style={styles.heroButton}>Get Started</Button>
          </Link>
        </Container>
      </div>

      {/* Search Bar */}
      <Container className="my-5">
        <Form>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form.Control 
                type="text" 
                placeholder="Search for scholarships..." 
                style={styles.searchInput}
              />
            </Col>
            <Col md={2}>
              <Button variant="success" style={styles.searchButton}>Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Features Section */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="mb-4" style={styles.card}>
              <Card.Body>
                <Card.Title>Search Scholarships</Card.Title>
                <Card.Text>
                  Easily find scholarships that match your academic profile and interests.
                </Card.Text>
                <Link to="/login">
                  <Button variant="outline-primary">Search Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4" style={styles.card}>
              <Card.Body>
                <Card.Title>Apply for Financial Aid</Card.Title>
                <Card.Text>
                  Apply for financial aid opportunities and track your application status.
                </Card.Text>
                <Link to="/signup">
                  <Button variant="outline-primary">Apply Now</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4" style={styles.card}>
              <Card.Body>
                <Card.Title>Admin Dashboard</Card.Title>
                <Card.Text>
                  Admins can manage scholarships, track applications, and update financial aid information.
                </Card.Text>
                <Link to="/login">
                  <Button variant="outline-primary">Go to Dashboard</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="cta-section text-center py-5" style={styles.ctaSection}>
        <Container>
          <h2>Are you a student or an admin?</h2>
          <p>Join our platform and take the next step towards securing financial aid for your education!</p>
          <Link to="/signup">
            <Button variant="warning" size="lg" style={styles.ctaButton}>Sign Up Now</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    background: 'linear-gradient(to right, #0066ff, #0099ff)',
    color: '#fff',
    padding: '100px 0',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    margin: '20px 0',
  },
  heroButton: {
    marginTop: '20px',
  },
  searchInput: {
    height: '50px',
    fontSize: '1.2rem',
  },
  searchButton: {
    height: '50px',
    fontSize: '1.2rem',
  },
  card: {
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  ctaSection: {
    background: '#f8f9fa',
    borderTop: '2px solid #e9ecef',
  },
  ctaButton: {
    marginTop: '20px',
  },
};

export default Home;
