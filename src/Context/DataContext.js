import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //   City Name from Component/LeftSide/Search.js
  const [inputValue, setInputValue] = useState("");

  const [fetchresult, setfetchResult] = useState({});

  const [errorMessage, setErrorMessage] = useState("");

  // Initialize state with an empty object for over all data. all data set in this state
  const [resultData, setResultData] = useState({});

  const [forecastData, setForecaseData] = useState(null);

  //celsius or fahrenheit
  const [degree, setDegree] = useState(0);

  //for today week
  const [day, setDay] = useState(0);

  // Function to store result data
  const storeResultData = (name, data) => {
    setResultData((prevState) => ({
      ...prevState, // Spread previous state
      [name]: data, // Add new key-value pair
    }));
  };

  const sunFormattime = (name, timestamp) => {
    // console.log(name, timestamp);
    // console.log(suntime);
    const date = new Date(timestamp * 1000);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };
    storeResultData(name, date.toLocaleString("en-US", options));
  };

  //time and day format function
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      weekday: "long", // "Monday"
      //   year: "numeric", // "2024"
      //   month: "long", // "August"
      //   day: "numeric", // "3"
      hour12: false,
      hour: "2-digit", // "03"
      minute: "2-digit", // "45"
    };
    storeResultData("time", date.toLocaleString("en-US", options)); // Customize locale as needed
  };

  //   // api key for authentication and the api url
  const apiKey = "65b2ed78addc4427e89fcdd3f555bbf5";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiAirqualityURL =
    "http://api.openweathermap.org/data/2.5/air_pollution?";
  const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?";

  const UVURL = "https://api.openuv.io/api/v1/uv?";

  const UVkey = "openuv-noo2rlzgt9q9m-io";
  // Get details from the api

  async function checkWeather(city) {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const result = await response.json();
      if (result.cod !== "404") {
        console.log(result);
        setfetchResult(result);
      }
    } catch (e) {
      setErrorMessage(e.message);
      // console.log(e.message);
      // console.log("error");
    }
  }
  // http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid={API key}
  async function fetchAirQuality(lat, lon) {
    // console.log(lat, lon);
    try {
      const response = await fetch(
        apiAirqualityURL + `lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      const result = await response.json();
      if (result.cod !== "404") {
        // console.log(result);
        // console.log(result.list[0].main.aqi);
        storeResultData("airquality", result.list[0].main.aqi);
      }
    } catch (e) {
      setErrorMessage(e.message);
      // console.log(e.message);
      // console.log("error");
    }
  }

  async function fetchForeCase(lat, lon) {
    // console.log(lat, lon);
    try {
      const response = await fetch(
        forecastURL + `lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      const result = await response.json();
      if (result.cod !== "404") {
        setForecaseData(result.list);
        // console.log(result.list);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  }

  async function fetchUV(lat, lon) {
    // console.log(lat, lon);
    try {
      const response = await fetch(UVURL + `lat=${lat}&lng=${lon}`, {
        headers: { "x-access-token": UVkey },
      });
      const result = await response.json();
      if (result.cod !== "404") {
        // setForecaseData(result.list);
        // console.log(result.result.uv);
        storeResultData("uv", result.result.uv);
      }
    } catch (e) {
      setErrorMessage(e.message);
    }
  }

  function setFetchedData(fetchValue) {
    storeResultData("cityname", fetchValue.name);
    storeResultData("temp", fetchValue.main.temp.toFixed(1));
    formatDate(fetchValue.dt);
    storeResultData("imagename", fetchValue.weather[0].main);
    storeResultData("icon", fetchValue.weather[0].icon);
    sunFormattime("sunrise", fetchValue.sys.sunrise);
    sunFormattime("sunset", fetchValue.sys.sunset);
    storeResultData("humidity", fetchValue.main.humidity);
    storeResultData("windspeed", fetchValue.wind.speed);
    storeResultData("winddeg", fetchValue.wind.deg);
    storeResultData("visibility", fetchValue.visibility / 1000);
    fetchAirQuality(fetchValue.coord.lat, fetchValue.coord.lon);
    fetchForeCase(fetchValue.coord.lat, fetchValue.coord.lon);
    fetchUV(fetchValue.coord.lat, fetchValue.coord.lon);
  }

  // console.log(resultData);

  // console.log("outside");

  //for check putpose enable this and set the parameter value default
  // checkWeather();

  //inputValue is change useEffect will execute the api call function checkWeather with city argument
  useEffect(() => {
    inputValue !== "" && checkWeather(inputValue);
  }, [inputValue]);

  useEffect(() => {
    fetchresult.name !== undefined && setFetchedData(fetchresult);
  }, [fetchresult]);

  //   console.log("InputValue :", inputValue);

  return (
    <DataContext.Provider
      value={{
        setInputValue,
        errorMessage,
        setErrorMessage,
        resultData,
        forecastData,
        degree,
        setDegree,
        day,
        setDay,
      }}
    >
      {children}
      {/* {console.log(children)} */}
    </DataContext.Provider>
  );
};

export default DataContext;
