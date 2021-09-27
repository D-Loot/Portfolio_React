import React from "react";

export default function About() {
  return (
    <section id="about-me logo" className="grid-area-1">
      <div>
        <h2 className="contentTitle">About Me</h2>
        <p>
          Dan Looten Web Development offers expertise in both front-end and
          back-end web development. <br /> <br />
          If you are a small company looking for website online to host web
          sales or a large corporation <br />
          looking for back-end assistance, Dan Looten Web Development can help
          you.
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
