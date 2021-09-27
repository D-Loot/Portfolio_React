import React from "react";
// import PropTypes from "prop-types";

export default function Portfolio() {
  return (
    <section id="work" className="content-grid grid-area-2">
      <h2 className="contentTitle">Portfolio</h2>
      <div className="App-Flex">
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
              <h1>ArtSell Project</h1>
              <p>
                An art E-Commerce site. Users are able to sign in, add artwork
                to the cart database and simulate the checkout portion of the
                transaction using Stripe.
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
              <h1>Tech Blog</h1>
              <p>
                A full-stack developed blog. Users are able to sign in, create,
                update, and delete posts and add new comments to existing posts.
              </p>
              <p>Skills:</p>
              <div className="skillsTextDiv">
                <p>Heroku</p>
                <p>NodeJS</p>
                <p>Sequelize</p>
                <p>ExpressJS</p>
                <p>Express-Handlebars</p>
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
              <h1>Note Taker</h1>
              <p>
                A fully functional note taker app. The front end was provided,
                and the backend was completed by this developer.
              </p>
              <p>Skills:</p>
              <div className="skillsTextDiv">
                <p>Heroku</p>
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>Express-Handlebars</p>
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
        <div className="App-Info">
          <a href="https://d-loot.github.io/spoons/">
            <div className="App-Info-inner">
              <div className="App-Info-Img">
                <img
                  src="./assets/images/SpoonsImg.png"
                  alt="Spoons Project"
                  className="App-Info-Img-Init"
                />
              </div>
              <div className="App-Info-Text">
                <h1>Spoons Project</h1>
                <p>
                  A progress tracker built specifically for the neurodivergent
                  community. The program utilizes both set tasks, and custom
                  tasks that can be inputted by the user.
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
          </a>
        </div>

        <div className="App-Info">
          <a href="https://d-loot.github.io/W06-WeatherDashboard/">
            <div className="App-Info-inner">
              <div className="App-Info-Img">
                <img
                  src="./assets/images/WeatherAppImg.PNG"
                  alt="Weather Dashboard"
                  className="App-Info-Img-Init"
                />
              </div>
              <div className="App-Info-Text">
                <h1>Weather Dashboard</h1>
                <p>
                  Current and 5 day weather forecast app for any given city.
                </p>
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
          </a>
        </div>

        <div className="App-Info">
          <a href="https://d-loot.github.io/W05-WorkDayScheduler/">
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
                  different color for each timeslot. (Current time: red; past:
                  grey; future: green).
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
          </a>
        </div>
      </div>
    </section>
  );
}
