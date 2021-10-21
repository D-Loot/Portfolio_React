import React from "react";
// import PropTypes from "prop-types";

export default function TechBlog() {
  return (
    <div className="App-Info">
      <div className="App-Info-inner">
        <div className="App-Info-Img">
          <img
            src="./assets/images/TechBlog.PNG"
            alt="TechBlog"
            className="App-Info-Img-Init"
          />
        </div>
        <div className="App-Info-Text">
          <h1 className="App-Title">Tech Blog</h1>
          <p>
            A full-stack blog. Users are able to sign in, create, update, and
            delete posts and add new comments to existing posts.
          </p>
          <p>Skills:</p>
          <div className="skillsTextDiv">
            <p>Heroku</p>
            <p>Node.js</p>
            <p>Sequelize</p>
            <p>Express.js</p>
            <p>Handlebars.js</p>
            <div className="link-border">
              <p>
                <a
                  href="https://guarded-journey-90332.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  Deployed App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/D-Loot/W14-TechBlog/"
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
