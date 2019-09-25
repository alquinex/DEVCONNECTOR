import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <li className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <a href="!#">Developers</a>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </li>
  );
};

export default Navbar;
