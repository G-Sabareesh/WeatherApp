import React, { useContext } from "react";
import DataContext from "../../../Context/DataContext";

const AirQuality = () => {
  const { resultData } = useContext(DataContext);

  return (
    // This style is same as humidity so className humidity
    <div className="humidity">
      <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="data d-flex align-items-center">
          <span className="fs-4 me-4">
            Level : {`${resultData.airquality || "0"}`}
          </span>
          <div className="indicator ms-3">
            <div className={resultData.airquality >= 4 ? "active" : ""}></div>
            <div
              className={
                resultData.airquality === 3 && resultData.airquality < 4
                  ? "active"
                  : ""
              }
            ></div>
            <div
              className={
                resultData.airquality === 2 && resultData.airquality < 3
                  ? "active"
                  : ""
              }
            ></div>
            <div
              className={
                resultData.airquality === 1 && resultData.airquality < 2
                  ? "active"
                  : ""
              }
            ></div>
          </div>
        </div>
        <div className="additional d-flex align-items-center">
          <span className="text">
            {resultData.airquality >= 4
              ? "Poor 🥵"
              : resultData.airquality >= 3
              ? "Moderate 😑"
              : resultData.airquality >= 2
              ? "Fair 😰"
              : resultData.airquality >= 1
              ? "Good 🙂"
              : "None 😐"}
          </span>
          {/* <span className="icon d-flex align-items-center justify-content-center">
            &#x1F44E;
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
