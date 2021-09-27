import React from "react";
// import PropTypes from "prop-types";

export default function Footer() {
  return (
    <footer className="footer-spacing">
      <h2>CONTACT ME</h2>

      <a
        href="https://www.linkedin.com/in/dan-looten-1917b2178"
        className="hover-text"
        id="footer-text"
      >
        Linkedin
      </a>

      <a
        href="https://github.com/D-Loot/Portfolio"
        className="hover-text"
        id="footer-text"
      >
        GitHub
      </a>

      <p>Email: danwlooten@gmail.com</p>
      <p>Phone: (217) 653-8877</p>
    </footer>
  );
}
