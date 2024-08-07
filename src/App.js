import { useContext } from "react";
import "./App.css";
import Main from "./Main";
import DataContext from "./Context/DataContext";
// import Footer from "./Footer";

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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
