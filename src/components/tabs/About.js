import React from "react";

export default function About() {
  return (
    <section id="about-me" className="grid-area-1">
      <div>
        <h2 className="contentTitle">About Me</h2>
        <p>
          Full Stack Web Developer using a background in engineering and data
          analysis to solve complex problems of all types. Recently earned a
          certificate in Full Stack Development from the Washington University
          of St. Louis and developed skills in JavaScript, CSS, React.js,
          responsive web design, and GraphQL. Known for creative Front-End
          design with mobile first designs and elaborate Back-End solutions
          using modern GraphQL techniques. Each project is designed to provide
          an accessible, pleasant, and memorable experience. Looking to bring my
          attention to detail, communication skills, and technical skills to a
          company to grow and become a valuable asset.
        </p>
      </div>

      <img
        src="./assets/images/cover photo.jpg"
        alt="Profile"
        className="profile-pic"
      />
    </section>
  );
}
