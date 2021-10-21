import React from "react";

export default function Resume() {
  return (
    <section id="about-me logo" className="content-grid grid-area-2">
      <h2 className="contentTitle resumeTitle">
        <a href="./assets/LOOTEN - RESUME.pdf" target="_blank">
          Resumé PDF
        </a>
      </h2>
      <h2 className="contentTitle resumeTitle">
        <a
          href="https://docs.google.com/document/d/1VPDRlpQoK4pqnU_fQi9fvZvUguOlTIhc/edit?usp=sharing&ouid=105653866858386592303&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
        >
          Resumé Google Doc
        </a>
      </h2>
      <div className="resumeDiv">
        <div>
          <h3 className="resumeListTitle">Languages</h3>
          <ul className="resumeList">
            <li>Javascript ES6+</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SQL</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>Visual Basic</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Apollo Server</li>
            <li>Stripe</li>
          </ul>
        </div>
        <div>
          <h3 className="resumeListTitle">Applications</h3>
          <ul className="resumeList">
            <li>GitHub</li>
            <li>VSCode</li>
            <li>Insomnia</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>MongoDB Atlas</li>
          </ul>

          <h3 className="resumeListTitle">Frameworks</h3>
          <ul className="resumeList">
            <li>BootStrap</li>
            <li>jQuery</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Handlebars.js</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
