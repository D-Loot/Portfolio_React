import React from "react";
// import PropTypes from "prop-types";

export default function WeatherDashboard() {
  return (
    <div className="App-Info">
      {/* <a href="https://d-loot.github.io/W06-WeatherDashboard/"> */}
      <div className="App-Info-inner">
        <div className="App-Info-Img">
          <img
            src="./assets/images/WeatherAppImg.PNG"
            alt="Weather Dashboard"
            className="App-Info-Img-Init"
          />
        </div>
        <div className="App-Info-Text">
          <h1 className="App-Title">Weather Dashboard</h1>
          <p>Current and 5 day weather forecast app for any given city.</p>
          <p>Skills:</p>
          <div className="skillsTextDiv">
            <p>HTML</p>
            <p>BootStrap</p>
            <p>JavaScript</p>
            <p>OpenWeatherMap API</p>
            <p>moment.js</p>
            <p>Local Storage</p>
            <div className="link-border">
              <p>
                <a
                  href="https://d-loot.github.io/W06-WeatherDashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hover-text"
                >
                  Deployed App
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/D-Loot/W06-WeatherDashboard"
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
