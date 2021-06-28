import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { create } from "combined-stream";

const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
  const [formData, setFormData] = useState({
    bio: "",
    favoritemovie: "",
    favoritegame: "",
    favoritetvseries: "",
  });

  useEffect(()=> {
      getCurrentProfile()

      setFormData({
          favoritemovie: loading || !profile.favoritemovie ? '' : profile.favoritemovie,
          favoritegame: loading || !profile.favoritegame ? '' : profile.favoritegame,
          favoritetvseries: loading || !profile.favoritetvseries ? '' : profile.favoritetvseries,
          bio: loading || !profile.bio ? '' : profile.bio,
      });

  }, [loading]);

  const { bio, favoritemovie, favoritegame, favoritetvseries } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 class="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Favorite Movie"
            name="favoritemovie"
            value={favoritemovie}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Any movie that you can think of !</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Favorite Game"
            name="favoritegame"
            value={favoritegame}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            What is your all time favorite game ?
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Favorite TV Series "
            name="favoritetvseries"
            value={favoritetvseries}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">Your all time #1 TV Series</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/home">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));
