import React, { useContext } from "react";

import DataContext from "../../Context/DataContext";

// import Clouds from "../asset/images/Clouds.png";

import "./leftmain.css";

const WeatherImage = () => {
  const { resultData } = useContext(DataContext);

  // const img =
  //   resultData.imagename === undefined
  //     ? "asset/images/defaultWeather.png"
  //     : `asset/images/${resultData.imagename}.png` ;

  // console.log(img);

  return (
    <div className="weatherimage">
      <div className="sectionImage">
        <div className="img-fluid">
          <img
            src={
              resultData.now === "day"
                ? "asset/images/defaultWeather.png"
                : "asset/images/Moon.png"
            }
            alt="Img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default WeatherImage;
