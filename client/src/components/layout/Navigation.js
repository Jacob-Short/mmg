import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> MMG
        </Link>
      </h1>
      <ul>
        <Link to='!#'>DataBase</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
