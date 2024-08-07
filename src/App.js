import { useContext, useEffect } from "react";
import "./App.css";
import Main from "./Main";
import DataContext from "./Context/DataContext";

function App() {
  const { resultData } = useContext(DataContext);

  resultData.now && resultData.now === "day"
    ? document.querySelector("body").setAttribute("data-theme", "light")
    : resultData.now === "night"
    ? document.querySelector("body").setAttribute("data-theme", "dark")
    : document.querySelector("body").setAttribute("data-theme", "light");

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
