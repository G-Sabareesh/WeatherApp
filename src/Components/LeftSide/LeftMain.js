import React from "react";

import "./leftmain.css";
import "../../CSS/main.css";

import Search from "./Search";
import WeatherImage from "./WeatherImage";
import WeatherInfo from "./WeatherInfo";
import Place from "./Place";

const LeftMain = () => {
  return (
    <div className="leftmain">
      <Search />
      <WeatherImage />
      <WeatherInfo />
      <Place />
    </div>
  );
};

export default LeftMain;
