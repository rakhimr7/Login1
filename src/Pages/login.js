import React from 'react';
import '../Pages/StylesPages/login.css';
import logo from './logo.jpeg';
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

function Registration() {
  return (
    <div className="App">
      <div className="sub-app">
        <div>
        <div className="img">
          <img className="logo" src= {logo} alt="Logo" />
          <h1 className="street-line" style={{ fontFamily: 'Dosis, sans-serif' }}>STREETLINE</h1> &nbsp; &nbsp;
        </div>
        <div>
          <input type="text" placeholder="Email" className="Email" /> &nbsp; 
          <input type="password" placeholder="Password" className="Password" /> &nbsp; 
          <div className="Button">
          <button className="login-button">Login</button>
        </div>
          <h2><a href="http://localhost:3000">New here? Sign up!</a></h2>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;