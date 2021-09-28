import React, { useState } from "react";
// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [Email, setEmail] = useState("");
  const [Name, setUserName] = useState("");
  const [Message, setUserMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "Email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setUserName(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  // Create a function that will check if the field is blank and if the email is valid, if you leave the text field blank after clicking into the field
  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (!inputValue) {
      setErrorMessage(`Error: ${inputType} can not be blank`);
    } else if (inputType === "Email" && !validateEmail(Email)) {
      setErrorMessage("Email is invalid");
    } else {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(Email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    // setPassword("");
    setEmail("");
    setUserMessage("");
  };

  return (
    <div className="grid-area-2">
      <h2 className="contentTitle">Contact Page</h2>
      <form className="form" id="contactForm">
        <p>Name:</p>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        <p>Email:</p>
        <input
          value={Email}
          name="Email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Email"
        />
        <p>Message:</p>
        <textarea
          value={Message}
          name="Message"
          id="Message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          cols="50"
          rows="10"
          form="form"
          placeholder="Message"
        ></textarea>
        <button type="button" onClick={handleFormSubmit} id="contactFormSubmit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
