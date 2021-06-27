import React from 'react'
import Navigation from './Navigation'

export const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Meta Movies & Games</h1>
            <p className="lead">
              Create a profile, search for your top movies, TV Shows, and Games,
            leaves comments andshare posts with your friends and family!
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">Sign Up</a>
              <a href="login.html" className="btn btn-light">Login</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Landing;