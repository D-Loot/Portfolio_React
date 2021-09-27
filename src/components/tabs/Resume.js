import React from "react";

export default function Resume() {
  return (
    <section id="about-me logo" className="content-grid grid-area-2">
      <h2 className="contentTitle resumeTitle">
        <a href="./assets/LOOTEN - RESUME.pdf" target="_blank">
          Resume PDF
        </a>
      </h2>
      <div className="resumeDiv">
        <div>
          <h3 className="resumeListTitle">Languages</h3>
          <ul className="resumeList">
            <li>React</li>
            <li>MongoDB</li>
            <li>ExpressJS</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>JavaScript ES6+</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SQL</li>
            <li>Visual Basic</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3 className="resumeListTitle">Applications</h3>
          <ul className="resumeList">
            <li>GitHub</li>
            <li>Heroku</li>
            <li>MySQL</li>
            <li>VSCode</li>
          </ul>

          <h3 className="resumeListTitle">Frameworks</h3>
          <ul className="resumeList">
            <li>BootStrap</li>
            <li>jQuery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
