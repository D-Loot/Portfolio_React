import React from "react";
// import PropTypes from "prop-types";

export default function Spoons() {
  return (
    <div className="App-Info">
      {/* <a href="https://d-loot.github.io/spoons/"> */}
      <div className="App-Info-inner">
        <div className="App-Info-Img">
          <img
            src="./assets/images/SpoonsImg.png"
            alt="Spoons Project"
            className="App-Info-Img-Init"
          />
        </div>
        <div className="App-Info-Text">
          <h1 className="App-Title">Spoons Project</h1>
          <p>
            A progress tracker built for the neurodivergent community. The
            program can set tasks and track the duration of each task.
          </p>
          <p>Skills:</p>
          <div className="skillsTextDiv">
            <p>HTML</p>
            <p>JavaScript</p>
            <p>Local Storage</p>
            <p>API</p>
            <p>moment.js</p>
            <p>GitHub</p>
            <div className="link-border">
              <p>
                <a
                  href="https://d-loot.github.io/spoons/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  Deployed App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/D-Loot/spoons/"
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
      {/* </a> */}
    </div>
  );
}
