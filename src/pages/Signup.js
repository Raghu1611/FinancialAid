import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    console.log('User registered:', { name, email, password });

    // Redirect to login after successful signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <Container className="signup-form">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Sign Up</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your full name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="form-input"
                />
              </Form.Group>

              <Button variant="primary" type="submit" block className="signup-btn">
                Sign Up
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>Already have an account? <Link to="/login" className="login-link">Login here</Link>.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
