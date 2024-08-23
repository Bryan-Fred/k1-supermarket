import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myLogo from '../images/myLogo.png';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== reenteredPassword) {
      setError('Passwords do not match');
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch('https://k1-backend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          secondName,
          email,
          password,
          telephone,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccess('Account created successfully!');
        setError('');
        setTimeout(() => {
          navigate('/Homepage');
        }, 2000);
      } else {
        console.error('Error:', data); // Log the error details
        setError(data.message || 'An error occurred. Please try again.');
        setSuccess('');
      }
    } catch (error) {
      console.error('Network Error:', error); // Log network or other unexpected errors
      setError('An error occurred. Please try again.');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="signup-container">
      <img src={myLogo} alt="Logo" className='img-logo-login' />
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <div className="full-name">
            <input
              type="text"
              id="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              id="secondName"
              value={secondName}
              placeholder="Second Name"
              onChange={(e) => setSecondName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reenteredPassword">Confirm Password</label>
          <input
            type="password"
            id="reenteredPassword"
            value={reenteredPassword}
            onChange={(e) => setReenteredPassword(e.target.value)}
            required
          />
        </div>
        {loading && <p className="loading">Creating account...</p>}
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
