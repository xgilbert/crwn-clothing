import React from "react";

import Directory from "../../components/directory/Directory";

import "./HomePage.scss";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <div className="directory-menu">
      <Directory />
    </div>
  </div>
);

export default HomePage;
