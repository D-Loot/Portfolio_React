import React from "react";
// import PropTypes from "prop-types";

export default function WorkDayScheduler() {
  return (
    <div className="App-Info">
      <div className="App-Info-inner">
        <div className="App-Info-Img">
          <img
            src="./assets/images/WorkDayScheduler.png"
            alt="Work Day Scheduler"
            className="App-Info-Img-Init"
          />
        </div>
        <div className="App-Info-Text">
          <h1>Work Day Scheduler</h1>
          <p>
            Saves the tasks submitted into each timeslot and displays a
            different color for each timeslot. (Current time: red; past: grey;
            future: green).
          </p>
          <p>Skills:</p>
          <div className="skillsTextDiv">
            <p>HTML</p>
            <p>BootStrap</p>
            <p>JavaScript</p>
            <p>moment.js</p>
            <p>Local Storage</p>
            <div className="link-border">
              <p>
                <a
                  href="https://d-loot.github.io/W05-WorkDayScheduler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  Deployed App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/D-Loot/W05-WorkDayScheduler"
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
