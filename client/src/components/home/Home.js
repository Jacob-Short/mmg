import React, { useEffect, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import HomeActions from "./HomeActions";
import { getCurrentProfile } from "../../actions/profile";


export const Home = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Home</h1>
      <p>Welcome {user && user.name}</p>
      {profile !== null ? (
        <Fragment>
            <HomeActions/>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet set up a profile! Please add some info!</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Home.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Home);
