import React from 'react';
import './NavbarStyles.scss';

function Navbar() {
  return (
    <div className="navBar">
      <div className="logoContainer">
        <a href="/#">
          <img src="./src/assets/IMG/sport shoe logo.png" alt="logo" />
        </a>
      </div>
      <div className="navItems">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
        </ul>
      </div>

      <div className="loginButton">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
