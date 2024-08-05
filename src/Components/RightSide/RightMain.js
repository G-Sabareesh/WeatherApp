import React from "react";

import "./rightmain.css";

import Header from "./Header";
import Week from "./Week";
import Highlights from "./Highlights";

const RightMain = () => {
  return (
    <div className="rightmain">
      <Header />
      <Week />
      <Highlights />
    </div>
  );
};

export default RightMain;
