import React, { useContext } from "react";

import "./leftmain.css";
import "../../CSS/main.css";

import Search from "./Search";
import WeatherImage from "./WeatherImage";
import WeatherInfo from "./WeatherInfo";
import Place from "./Place";

import DataContext from "../../Context/DataContext";

const LeftMain = () => {
  const { resultData } = useContext(DataContext);

  var background = {
    background: resultData.now === "night" && "#141414",
    color: resultData.now === "night" && "#fff"
  };

  return (
    <div className="leftmain" style={background}>
      <Search />
      <WeatherImage />
      <WeatherInfo />
      <Place />
    </div>
  );
};

export default LeftMain;
