import React from "react";
// import PropTypes from "prop-types";

export default function Furbook() {
  return (
    <div className="App-Info">
      <div className="App-Info-inner">
        <div className="App-Info-Img">
          <img
            src="./assets/images/furbook.png"
            alt="Furbook Project"
            className="App-Info-Img-Init"
          />
        </div>
        <div className="App-Info-Text">
          <h1 className="App-Title">Furbook</h1>
          <p>
            A social media application in which users are able to sign in, post
            pictures of their pets, and comment on other posts.
          </p>
          <p>Skills:</p>
          <div className="skillsTextDiv">
            <p>MongoDB Atlas</p>
            <p>Express.js</p>
            <p>React</p>
            <p>Node.js</p>
            <p>Cloudinary API</p>
            <p>GraphQL</p>
            <p>Apollo Server</p>
            <div className="link-border">
              <p>
                <a
                  href="https://furbook.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  Deployed App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/D-Loot/furbook"
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
