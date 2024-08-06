import React from "react";
import LeftMain from "./Components/LeftSide/LeftMain";
import RightMain from "./Components/RightSide/RightMain";


import "./CSS/main.css";

const Main = () => {
  return (
    <div className="main">
        <LeftMain />
        <RightMain />
    </div>
  );
};

export default Main;
