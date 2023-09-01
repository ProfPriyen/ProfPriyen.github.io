import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo2 from './logo2.png';
import './App.css';
import axios from 'axios';
function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const database = [
  //   {
  //     username: "priyen",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  // const handleLogin = (e) => {
  //   e.preventDefault();

    // Perform login validation
  //   const userData = database.find((user) => user.username === username);
  //   if (userData) {
  //     if (userData.password === password) {
  //       // Successful login
  //       setError('');
        
  //       // Redirect to the dashboard page after successful login
  //       navigate('/components');
  //       localStorage.setItem("username",username);
  //       window.location.pathname="/Components"
  //     } else {
  //       // Invalid credentials
  //       setError('Invalid username or password');
  //     }
  //   } else {
  //     setError('Invalid username or password');
  //   }
  // };
  const handleLogin = async(e) => {
     e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/login', {
      username,
      password,
    });
    alert('Login successful.');
    setusername('');
    setPassword('');
    navigate('/components');
          localStorage.setItem("username",username);
          window.location.pathname="/Components"
  } catch (error) {
    setError('Invalid username or password');
  }
};

  return (
    <>
    <header>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
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

      {/* <img src= {logo2} className="App-logo" alt="logo" /> 
      {/* <img src={logo2} className="App-logo" alt="logo" /> */}
      {/* <br/> */}
      {/* <a        className="App-link" */}
        {/* href="https://www.youtube.com/@priyenpatel5582" */}
        {/* target="_blank" */}
        {/* rel="noopener noreferrer" */}
      {/* > */}
        {/* Visit Channel */}
      {/* </a> */}
      {/* <br/> */} 
      </header>
    </>
  );
}

export default Login;