import React from "react";
// import PropTypes from "prop-types";

export default function Footer() {
  return (
    <footer id="contact-me" className="bottom-auto">
      <h2>CONTACT ME</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/dan-looten-1917b2178"
            className="hover-text"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/D-Loot/Portfolio" className="hover-text">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto: danwlooten@gmail.com" className="hover-text">
            Email
          </a>
        </li>
        <li>Phone: (217) 653-8877</li>
      </ul>
    </footer>
  );
}
