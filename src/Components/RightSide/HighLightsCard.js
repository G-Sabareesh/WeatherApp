import React, { useContext } from "react";

import "./rightmain.css";

import UVIndex from "./HighlightCard/UVIndex";
import WindStatus from "./HighlightCard/WindStatus";
import Suntime from "./HighlightCard/Suntime";
import Humidity from "./HighlightCard/Humidity";
import Visibility from "./HighlightCard/Visibility";
import AirQuality from "./HighlightCard/AirQuality";
import DataContext from "../../Context/DataContext";

const HighLightsCard = ({ title }) => {
  const { day } = useContext(DataContext);

  return (
    <div className="highlightscard ">
      <div className={day === 1 ? "cardTitle active" : "cardTitle"}>
        {title}
      </div>
      <div className="cardHighlight d-flex align-items-center justify-content-center">
        {title === "UV Index" && <UVIndex />}
        {title === "Wind Status" && <WindStatus />}
        {title === "Sunrise & Sunset" && <Suntime />}
        {title === "Humidity" && <Humidity />}
        {title === "Visibility" && <Visibility />}
        {title === "Air Quality" && <AirQuality />}
      </div>
    </div>
  );
};

export default HighLightsCard;
