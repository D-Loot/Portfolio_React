import React from "react";
// import PropTypes from "prop-types";

export default function NoteTaker() {
  return (
    <div className="App-Info">
      <div className="App-Info-inner">
        <div className="App-Info-Img">
          <img
            src="./assets/images/OpeningPage.PNG"
            alt="Note Taker"
            className="App-Info-Img-Init"
          />
        </div>
        <div className="App-Info-Text">
          <h1 className="App-Title">Note Taker</h1>
          <p>
            A fully functional note taker app. The front end was provided, and
            the backend was completed by this developer.
          </p>
          <p>Skills:</p>
          <div className="skillsTextDiv">
            <p>Heroku</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Handlebars.js</p>
            <div className="link-border">
              <p>
                <a
                  href="https://whispering-ocean-33462.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  Deployed App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/D-Loot/W11-ExpressJS-NoteTaker/"
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
