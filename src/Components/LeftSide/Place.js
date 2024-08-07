import React, { useContext } from "react";

import "./leftmain.css";

import DataContext from "../../Context/DataContext";

const Place = () => {
  const { resultData } = useContext(DataContext);

  return (
    <div className="place">
      <div className="child ">
        <div className="card h-100 ">
          <div className="placeimage">
            <img
              src={resultData.bgimage !== undefined ? resultData.bgimage : "asset/images/default.jpg"}
              className="card-img"
              alt="Img"
            ></img>
          </div>
          <div className="cardTitle card-img-overlay d-flex justify-content-center align-items-center">
            <h5
              className="card-title"
              style={{ color: "white", fontSize: "2em" }}
            >
              {resultData.cityname ? resultData.cityname : "City Name"}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
