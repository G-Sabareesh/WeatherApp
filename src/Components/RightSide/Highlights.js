import React from "react";

import "./rightmain.css";

import HighLightsCard from "./HighLightsCard";

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="section">
        <div className="headingTitle d-flex align-items-center">
          <span>Today's Highlights</span>
        </div>
        <div className="cardPlace d-flex align-items-center justify-content-evenly">
          {/* <div className="cardStyle"> */}
          <HighLightsCard title={"UV Index"} />
          <HighLightsCard title={"Sunrise & Sunset"} />
          <HighLightsCard title={"Wind Status"} />
          {/* </div>
          <div className="d-flex flex-row"> */}
          <HighLightsCard title={"Humidity"} />
          <HighLightsCard title={"Visibility"} />
          <HighLightsCard title={"Air Quality"} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
