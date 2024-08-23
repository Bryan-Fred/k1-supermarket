import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for HTTP requests
import myLogo from '../images/myLogo.png';

const LoginPage = () => {
  const [email, setEmail] = useState(''); // Changed from username to email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    try {
      const response = await axios.post('https://k1-backend.onrender.com/api/auth/login', {
        email,
        password,
      });

      // If login is successful, store the token (and maybe user info) and navigate
      localStorage.setItem('authToken', response.data.token);
      // alert('Logged in successfully!');
      navigate('/cart');
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <img src={myLogo} alt=" " className='img-logo-login' /> 
      <h3 className='welcome-message'> Welcome to K1 Supermarket</h3>
      <p className='message-to-user'>Type your email to login or Create a K1 account.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="create-account-link">
        Don't have an account? <Link to="/signup">Create Account</Link>
      </p>
      <p className='message-to-user'> By tapping "Login" you agree with our terms. 
        Learn how we process your data in our <Link to=" ">privacy policy</Link>
      </p>
    </div>
  );
};

export default LoginPage;
