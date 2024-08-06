import React, { useContext } from "react";

import "./rightmain.css";
import DataContext from "../../Context/DataContext";

const WeekCard = ({ props }) => {
  const { degree, day } = useContext(DataContext);
  // console.log(degree);

  // console.log(props);
  const formatDate = (timestamp) => {
    // console.log(timestamp);
    if (timestamp) {
      const date = new Date(timestamp * 1000);
      const options = {
        weekday: "short",
      };

      return date.toLocaleString("en-US", options);
    }
  };

  const img =
    props === ""
      ? "asset/images/defaultWeather.png"
      : `asset/images/${props.weather[0].main}.png`;

  // console.log(props.main);
  return props === "" ? (
    <div className="weekcard bg-white d-flex flex-column justify-content-evenly align-items-center">
      <span className={day === 0 ? "weekText active" : "weekText"}>
        {formatDate(props.dt) || "Day"}
      </span>
      <span>
        <img src={img} alt="Weather Icon" style={{ height: "60px" }}></img>
      </span>
      <span>
        <span className={degree === 0 ? "mx-1 weekDeg active" : "mx-1 weekDeg"}>
          0°
        </span>
        <span className={degree === 1 ? "mx-1 weekDeg active" : "mx-1 weekDeg"}>
          0°
        </span>
      </span>
    </div>
  ) : (
    <div className="weekcard bg-white d-flex flex-column justify-content-evenly align-items-center">
      <span className={day === 0 ? "weekText active" : "weekText"}>
        {formatDate(props.dt) || "Day"}
      </span>
      <span>
        <img src={img} alt="Weather Icon" style={{ height: "60px" }}></img>
      </span>
      <span>
        <span
          className={degree === 0 ? "weekDeg active" : "weekDeg"}
        >{`${parseInt(props.main.temp)}°`}</span>
        <span
          className={degree === 1 ? "weekDeg active" : "weekDeg"}
        >{`${parseInt(props.main.temp * 1.8 + 32)}°`}</span>
      </span>
    </div>
  );
};

export default WeekCard;
