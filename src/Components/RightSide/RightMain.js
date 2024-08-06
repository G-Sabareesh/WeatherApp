import React, { useContext } from "react";

import "./rightmain.css"; 

import Header from "./Header";
import Week from "./Week";
import Highlights from "./Highlights";
import DataContext from "../../Context/DataContext";

const RightMain = () => {
  const { resultData } = useContext(DataContext);

  var background = {
    background: resultData.now === "night" && "black",
    color: resultData.now === "night" && "#fff",
  };
  return (
    <div className="rightmain">
      <Header />
      <Week />
      <Highlights />
    </div>
  );
};

export default RightMain;
