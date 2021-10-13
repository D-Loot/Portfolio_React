import React from "react";
// import PropTypes from "prop-types";

export default function ArtSell() {
  return (
    <div className="App-Info">
      <div className="App-Info-inner">
        <div className="App-Info-Img">
          <img
            src="./assets/images/Artsell-logo.png"
            alt="Artsell Project"
            className="App-Info-Img-Init"
          />
        </div>
        <div className="App-Info-Text">
          <h1 className="App-Title">ArtSell Project</h1>
          <p>
            An art E-Commerce site. Users can sign in, add artwork to a cart and
            simulate a checkout transaction using Stripe.
          </p>
          <p>Skills:</p>
          <div className="skillsTextDiv">
            <p>Stripe</p>
            <p>Heroku</p>
            <p>NodeJS</p>
            <p>Sequelize</p>
            <p>ExpressJS</p>
            <p>Express-Handlebars</p>
            <div className="link-border">
              <p>
                <a
                  href="https://artsell.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  Deployed App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/D-Loot/ArtSell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
