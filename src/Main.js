import React from "react";
import LeftMain from "./Components/LeftSide/LeftMain";
import RightMain from "./Components/RightSide/RightMain";

import { DataProvider } from "./Context/DataContext";

import "./CSS/main.css";

const Main = () => {
  return (
    <div className="main">
      <DataProvider>
        <LeftMain />
        <RightMain />
      </DataProvider>
    </div>
  );
};

export default Main;
