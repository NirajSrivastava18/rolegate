import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import userData from '../data.json';
import loginVideo from '../assets/18069233-hd_1080_1920_24fps.mp4';
import logo from '../assets/Screenshot_2024-11-30_140238-removebg-preview.png';
import './Login.css'; // Custom CSS for styling

const Login = ({ setCurrentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = userData.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.status === 'Active'
    );

    if (user) {
      // Store the authenticated user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="login-left">
        <h1 className="role-gate-logo">
          <img className="logo" src={logo} alt="rolegate" />
        </h1>
        <div className="logo-container"></div>
        <div className="login-form-container">
          <h2 className="text-center my-3  login">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="btn btn-outline-warning"
              onClick={handleLogin}
              className="w-100 btn-border-radius-lg "
            >
              Login
            </Button>
            <h5 className="text-center footer">Copyright © 2024 RoleGate</h5>
          </Form>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <video className="background-video" autoPlay loop muted>
          <source src={loginVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Login;
