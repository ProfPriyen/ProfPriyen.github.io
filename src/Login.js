import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import logo2 from './logo2.png';
import './App.css';
function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login validation
    const userData = database.find((user) => user.username === name);
    if (userData) {
      if (userData.password === password) {
        // Successful login
        setError('');
        
        // Redirect to the dashboard page after successful login
        navigate('/components');
      } else {
        // Invalid credentials
        setError('Invalid username or password');
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
    <header className="App-header">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Username:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div>{error}</div>}
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
      <br/>
{/* 
      <img src= {logo2} className="App-logo" alt="logo" />  */}
      {/* <img src={logo2} className="App-logo" alt="logo" /> */}
      <br/>
      {/* <a
        className="App-link"
        href="https://sites.google.com/view/psp2233"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </a> */}
      <br/>
      </header>
    </>
  );
}

export default Login;