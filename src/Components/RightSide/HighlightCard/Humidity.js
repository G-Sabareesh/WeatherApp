import React, { useContext } from "react";
import DataContext from "../../../Context/DataContext";

const Humidity = () => {
  const { resultData } = useContext(DataContext);

  return (
    <div className="humidity">
      <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="data d-flex align-items-center">
          <span className="me-4">{`${resultData.humidity || "0.0"}%`}</span>
          <div className="indicator ms-3">
            <div className={resultData.humidity > 75 ? "active" : ""}></div>
            <div
              className={
                resultData.humidity > 50 && resultData.humidity <= 75
                  ? "active"
                  : ""
              }
            ></div>
            <div
              className={
                resultData.humidity > 25 && resultData.humidity <= 50
                  ? "active"
                  : ""
              }
            ></div>
            <div
              className={
                resultData.humidity > 0 && resultData.humidity <= 25
                  ? "active"
                  : ""
              }
            ></div>
          </div>
        </div>
        <div className="additional d-flex align-items-center">
          <span className="text">
            {resultData.humidity <= 25
              ? "Very Dry"
              : resultData.humidity <= 50
              ? "Dry"
              : resultData.humidity <= 75
              ? "Comfortable"
              : resultData.humidity <= 100
              ? "Humid"
              : "None"}
          </span>
          <span className="icon d-flex align-items-center justify-content-center">
            {/* &#x1F919; */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
