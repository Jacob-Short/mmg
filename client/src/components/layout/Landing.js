import React from 'react'
import Navigation from './Navigation'
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/home'/>
  } 
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Meta Movies & Games</h1>
            <p className="lead">
              Create a profile, search for your top movies, TV Shows, and Games,
            leaves comments and share posts with your friends and family!
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
    )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);