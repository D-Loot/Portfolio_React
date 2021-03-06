import React from "react";
import PropTypes from "prop-types";

function NavigationTabs({ currentPage, handlePageChange }) {
  return (
    <div className="tabs-div">
      <p
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "clicked" : "hover-text"}
        id="tab"
      >
        About Me
      </p>
      <p
        onClick={() => handlePageChange("Portfolio")}
        className={currentPage === "Portfolio" ? "clicked" : "hover-text"}
        id="tab"
      >
        Portfolio
      </p>
      <p
        // href="./assets/LOOTEN - RESUME.pdf"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "clicked" : "hover-text"}
        id="tab"
      >
        Resumé
      </p>
    </div>
  );
}

NavigationTabs.propTypes = {
  currentPage: PropTypes.string,
  handlePageChange: PropTypes.any,
};

NavigationTabs.defaultProps = {
  currentPage: "Portfolio",
  handlePageChange: null,
};

export default NavigationTabs;
