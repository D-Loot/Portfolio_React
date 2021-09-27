import React from "react";

export default function Contact() {
  return (
    <div className="grid-area-2">
      <h2 className="contentTitle">Contact Page</h2>
      <div id="contactForm">
        <label htmlFor="contactName">Name: </label>
        <input type="text" id="contactName" />
        <label htmlFor="contactEmail">Email: </label>
        <input type="text" id="contactEmail" />
        Message:
        <textarea
          name="contactMessage"
          id="contactMessage"
          cols="50"
          rows="10"
          form="contactForm"
        ></textarea>
        <button id="contactFormSubmit">Submit</button>
      </div>
    </div>
  );
}
