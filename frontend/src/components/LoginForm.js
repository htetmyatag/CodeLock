// src/components/LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', {
        email: email,
        password: password
      });
      // Handle success response (e.g., display success message)
      console.log('Login successful:', response.data);
      // Clear input fields after successful login
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      // Handle error response (e.g., display error message)
      console.error('Login failed:', error.response.data);
      setError(error.response.data.message || 'An error occurred while logging in.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
