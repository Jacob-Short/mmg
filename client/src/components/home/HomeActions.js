import React from "react";
import { Link } from "react-router-dom";

export const HomeActions = () => {
  return (
    <div class="dash-buttons">
      <Link to="/edit-profile" class="btn btn-light">
        <i class="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
    </div>
  );
};

export default HomeActions;
