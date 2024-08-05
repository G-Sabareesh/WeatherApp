import React, { useContext } from "react";
import DataContext from "../../../Context/DataContext";

const Suntime = () => {
  const { resultData } = useContext(DataContext);

  return (
    <div className="suntime">
      <div className="sunrise d-flex align-items-center justify-content-evenly">
        <div className="sunicon d-flex align-items-center justify-content-center">
          <img
            src={"asset/images/up.png"}
            alt="Weather Icon"
            style={{ height: "45px" }}
          ></img>
        </div>
        <div className="suntimedisplay d-flex align-items-start justify-content-center flex-column">
          <span className="time">{resultData.sunrise || "00:00"}</span>
          {/* <span className="differ">-1m 46s</span> */}
        </div>
      </div>
      <div className="sunset d-flex align-items-center justify-content-evenly">
        <div className="sunicon d-flex align-items-center justify-content-center">
          <img
            src={"asset/images/down.png"}
            alt="Weather Icon"
            style={{ height: "45px" }}
          ></img>
        </div>
        <div className="suntimedisplay d-flex align-items-start justify-content-center flex-column">
          <span className="time">{resultData.sunset || "00:00"}</span>
          {/* <span className="differ">-1m 46s</span> */}
        </div>
      </div>
    </div>
  );
};

export default Suntime;
