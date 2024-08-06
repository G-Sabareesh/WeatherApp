import React, { useContext } from "react";
import DataContext from "../../../Context/DataContext";

const Visibility = () => {
  const { resultData } = useContext(DataContext);

  // console.log(resultData.visibility);

  const visibility = resultData.visibility
    ? Math.round(resultData.visibility / 1000)
    : 0;
  return (
    <div className="visibility">
      <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="data d-flex align-items-center">
          <span>{`${visibility || "0.0"}km`}</span>
        </div>
        <div className="additional d-flex align-items-center">
          <span className="text">
            {visibility === undefined
              ? "None 😐"
              : visibility <= 1
              ? "Very Poor 🥵"
              : visibility <= 3
              ? "Poor 😰"
              : visibility <= 5
              ? "Moderate 😑"
              : "Good 🙂"}
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
