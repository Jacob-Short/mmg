import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <i className='fas fa-sign-out-alt'></i>{' '}<span className='hide-sm'>Logout</span></a>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
    
        <Link to="/about">About</Link>
      
        <Link to="/register">Register</Link>
    
        <Link to="/login">Login</Link>
      
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> MMG
        </Link>
      </h1>
      { !loading && (<Fragment>
        { isAuthenticated ? authLinks : guestLinks}
      </Fragment>)}
    </nav>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigation);
