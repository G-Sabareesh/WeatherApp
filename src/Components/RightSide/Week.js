import React, { useContext, useEffect, useState } from "react";

import "./rightmain.css";

import WeekCard from "./WeekCard";
import DataContext from "../../Context/DataContext";

const Week = () => {
  const { forecastData } = useContext(DataContext);

  const [weekforecast, setWeekforecast] = useState(new Array(5).fill(""));

  useEffect(() => {
    if (forecastData) {
      // console.log(forecastData);
      const weekData = forecastData.filter((item, index) => {
        if (index % 8 === 0) {
          return item;
        }
      });

      setWeekforecast(weekData);
      // console.log("weekDay", weekData);
    }
  }, [forecastData]);

  // console.log(weekforecast);

  // console.log(forecastData);

  return (
    <div className="week">
      {weekforecast.map((item, index) => {
        return <WeekCard props={item} key={index} />;
      })}
    </div>
  );
};

export default Week;
