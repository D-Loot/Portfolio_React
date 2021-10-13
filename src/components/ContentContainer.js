import React, { useState } from "react";
import NavigationTabs from "./Navigation";
import About from "./tabs/About";
import Portfolio from "./tabs/Portfolio";
import Resume from "./tabs/Resume";

export default function ContentContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="contentContainer">
      <NavigationTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
