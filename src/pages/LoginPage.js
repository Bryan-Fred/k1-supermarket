import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myLogo from '../images/myLogo.png'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => { 
    e.preventDefault();
    // Add login logic here
    // If successful: 
    alert('Logged in successfully!');
    navigate('/Header');
    // If error:
    // setError('An error occurred. Please try again.');
  };

  return (
    <div className="login-container">
          <img src={myLogo} alt=" " className='img-logo-login' /> 
      <h3 className='welcome-message'> Welcome to K1 Supermarket</h3>
      <p className='message-to-user'>Type your email to login or Create a K1 account.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Login</button>
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