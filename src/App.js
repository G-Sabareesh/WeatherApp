import { useContext, useEffect } from "react";
import "./App.css";
import Main from "./Main";
import DataContext from "./Context/DataContext";

function App() {
  const { resultData } = useContext(DataContext);
  
  var background = {
      background : resultData.now === "night" && "#3c3c3c"
  }
  
  return (
    <div
      className="App"
      style={background}
    >
      <Main />
    </div>
  );
}

export default App;
