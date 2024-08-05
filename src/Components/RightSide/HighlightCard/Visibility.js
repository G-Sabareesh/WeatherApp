import React, { useContext } from "react";
import DataContext from "../../../Context/DataContext";

const Visibility = () => {
  const { resultData } = useContext(DataContext);

  // console.log(resultData.visibility);
  return (
    <div className="visibility">
      <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="data d-flex align-items-center">
          <span>{`${resultData.visibility || "0.0"}km`}</span>
        </div>
        <div className="additional d-flex align-items-center">
          <span className="text">
            {resultData.visibility === undefined
              ? "None"
              : resultData.visibility <= 1
              ? "Very Poor"
              : resultData.visibility <= 3
              ? "Poor"
              : resultData.visibility <= 5
              ? "Moderate"
              : "Good"}
          </span>
          <span className="icon d-flex align-items-center justify-content-center">
            {/* &#128543; */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
