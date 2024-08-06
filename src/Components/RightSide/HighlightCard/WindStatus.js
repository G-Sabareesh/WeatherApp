import React, { useContext } from "react";
import { MdWindPower } from "react-icons/md";
import DataContext from "../../../Context/DataContext";

const WindStatus = () => {
  const { resultData } = useContext(DataContext);

  return (
    <div className="windstatus">
      <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="data d-flex align-items-center">
          <span>{`${resultData.windspeed || "0.0"}km/h`}</span>
        </div>
        <div className="additional d-flex align-items-center">
          <span className="icon ms-3 d-flex align-items-center justify-content-center"><MdWindPower style={{color : "skyblue"}} size={200}/></span>
          <span className="text">{`${resultData.winddir || "NEWS"}`}</span>
        </div>
      </div>
    </div>
  );
};

export default WindStatus;
