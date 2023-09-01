import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login validation
    if (name === 'prof.priyen' && password === 'patel') {
      // Successful login
      setError('');

      // Redirect to the dashboard page after successful login
      navigate('/components');
    } else {
      // Invalid credentials
      setError('Invalid email or password');
    }
  };

  return (
    <>
    <header className="App-header">
    {/* <div className='appf'> */}
             <h3>Login</h3>
      <form onSubmit={handleLogin}>
      <div className="input-container">
          <label>Username:</label>
          <input  type="text"  value={name}  onChange={(e) => setName(e.target.value)} />
      </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div>{error}</div>}
        <div className="button-container">
          <button type="submit">Login</button>
          </div>
      </form>
    {/* </div> */}
   
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://www.youtube.com/@priyenpatel5582"
          target="_blank"
          rel="noopener noreferrer"
        >
        Visit To Youtube Channel 
        </a>
      <br/>
      </header>
    </>
  );
}

export default Login;