import React, { useContext } from "react";

import "./rightmain.css";
import DataContext from "../../Context/DataContext";

const Header = () => {
  const { degree, setDegree, day, setDay } = useContext(DataContext);

  return (
    <div className="header">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="first ms-5 d-flex justify-content-center align-items-center h-100">
          <div
            className={
              day === 0
                ? "px-3 py-1 linkText m-1 active"
                : "px-2 py-1 linkText m-1"
            }
            style={{ cursor: "pointer" }}
            onClick={() => setDay(0)}
          >
            Today
          </div>
          <div
            className={
              day === 1
                ? "px-3 py-1 linkText m-1 active"
                : "px-2 py-1 linkText m-1"
            }
            style={{ cursor: "pointer" }}
            onClick={() => setDay(1)}
          >
            Week
          </div>
        </div>
        <div className="second me-5 ms-auto d-flex justify-content-center align-items-center h-100">
          <div
            className={
              degree === 0
                ? "degreeText rounded-circle active"
                : "degreeText rounded-circle"
            }
            style={{ cursor: "pointer" }}
            onClick={() => setDegree(0)}
          >
            ℃
          </div>
          <div
            className={
              degree === 1
                ? "degreeText rounded-circle active"
                : "degreeText rounded-circle"
            }
            style={{ cursor: "pointer" }}
            onClick={() => setDegree(1)}
          >
            ℉
          </div>
          <div className="p-2 profileImage">
            <img
              className="rounded"
              src={
                "https://image.lexica.art/full_jpg/acf5676d-e1bb-47cf-8e64-b171543de0ec "
              }
              alt="Img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
