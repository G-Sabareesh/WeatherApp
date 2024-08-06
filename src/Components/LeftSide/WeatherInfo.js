import React, { useContext } from "react";

import "./leftmain.css";

import DataContext from "../../Context/DataContext";

const WeatherInfo = () => {
  const { resultData, degree } = useContext(DataContext);

  // console.log(resultData.imagename);

  // const img =
  //   resultData.imagename === undefined
  //     ? "asset/images/defaultWeather.png"
  //     : `asset/images/${resultData.imagename}.png`;

  // console.log(img);

  return (
    <div className="weatherinfo">
      <div className="section1 d-flex justify-content-center align-items-center">
        <div className="child d-flex justify-content-evenly flex-column">
          <span className="bigFont">
            {resultData.tempC
              ? degree === 0
                ? `${resultData.tempC}`
                : `${resultData.tempF}`
              : "0"}
            <sup>{degree === 0 ? "°c" : "°f"}</sup>
          </span>

          <span className="mediumFont mx-3 currentText">
            {resultData.time || "Day, 00.00"}
          </span>
        </div>
      </div>
      <div className="section2 d-flex justify-content-center flex-column align-items-center">
        <div className="child d-flex justify-content-start align-items-center flex-row">
          <img
            src={resultData.icon || "asset/images/defaultWeather.png"}
            alt="Img"
            style={{ height: "50px" }}
          ></img>
          <span className="infoText d-flex justify-content-start align-items-center">
            {resultData.imagename || "Description"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
