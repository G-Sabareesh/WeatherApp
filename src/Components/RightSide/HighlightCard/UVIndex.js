import React, { useContext } from "react";

import GaugeChart from "react-gauge-chart";
import DataContext from "../../../Context/DataContext";
const UVIndex = () => {
  const { resultData } = useContext(DataContext);
  // console.log(resultData.uv);
  const uvValue = resultData.uv ? Math.round((resultData.uv / 11) * 100) : 0;
  // console.log(uvValue / 100);

  return (
    <div className="uvindex">
      <div className="chartValue mb-3">
        <span>
          {uvValue <= 20
            ? "Low : "
            : uvValue <= 65
            ? "Moderate : "
            : uvValue <= 85
            ? "High : "
            : uvValue < 100
            ? "Very High : "
            : "None"}
        </span>
        {uvValue || 0}%<span></span>
      </div>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={4}
        percent={uvValue / 100}
        colors={["#558B2F", "#F9A825", "#EF6C00", "	#B71C1C"]}
        arcWidth={0.1} // Width of the gauge arc
        textColor="#000000"
        needleScale={0.65}
        hideText={true}
      />
    </div>
  );
};

export default UVIndex;
