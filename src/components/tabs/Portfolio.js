import React from "react";
import Furbook from "./Project/Furbook";
import ArtSell from "./Project/ArtSell";
import NoteTaker from "./Project/NoteTaker";
import Spoons from "./Project/Spoons";
import TechBlog from "./Project/TechBlog";
import Weather from "./Project/WeatherDashboard";
import WorkDayScheduler from "./Project/WorkDayScheduler";

export default function Portfolio() {
  return (
    <section id="work" className="content-grid grid-area-2">
      <h2 className="contentTitle">Portfolio</h2>
      <div className="App-Flex">
        <Furbook />
        <ArtSell />
        <NoteTaker />
        <Spoons />
        <TechBlog />
        <Weather />
        <WorkDayScheduler />
      </div>
    </section>
  );
}
