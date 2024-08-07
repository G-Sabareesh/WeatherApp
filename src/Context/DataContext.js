import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //   City Name from Component/LeftSide/Search.js
  const [inputValue, setInputValue] = useState("");

  const [fetchresult, setfetchResult] = useState(null);

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
    storeResultData(`${name}timestamp`, timestamp);
    const date = new Date(timestamp * 1000);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };
    storeResultData(name, date.toLocaleString("en-US", options));
  };

  //time and day format function
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
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
  // const apiUrl =
  //   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiUrl = "https://api.weatherapi.com/v1/current.json?&q=";
  const apikey = "785072b2279743e79dc140111240508";
  const apiAirqualityURL =
    "https://api.openweathermap.org/data/2.5/air_pollution?";
  const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?";

  // const UVURL = "https://api.openuv.io/api/v1/uv?";

  // const UVkey = "openuv-noo2rlzgt9q9m-io";
  // Get details from the api

  async function checkWeather(city) {
    try {
      const response = await fetch(apiUrl + city + `&key=${apikey}`);
      const result = await response.json();
      if (result.cod !== "404") {
        // console.log(result);
        setfetchResult(result);
      }
    } catch (e) {
      // setErrorMessage(e.message);
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
      // setErrorMessage(e.message);
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
      // console.log(result);
      if (result.cod !== "404") {
        setForecaseData(result.list);
      }
    } catch (e) {
      // setErrorMessage(e.message);
    }
  }

  const suntime =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  async function fetchSun(city) {
    // console.log(lat, lon);
    try {
      const response = await fetch(
        `${suntime} + ${city} +  &appid=${apiKey}&units=metric`
      );
      const result = await response.json();
      // console.log(result);
      if (result.cod !== "404") {
        // console.log(result.visibility);
        storeResultData("visibility", result.visibility);
        sunFormattime("sunrise", result.sys.sunrise);
        sunFormattime("sunset", result.sys.sunset);
      }
    } catch (e) {
      // setErrorMessage(e.message);
    }
  }

  function setFetchedData(fetchValue) {
    storeResultData("cityname", fetchValue.location.name);
    storeResultData("tempC", fetchValue.current.temp_c);
    storeResultData("tempF", fetchValue.current.temp_f);
    formatDate(fetchValue.location.localtime);
    storeResultData("imagename", fetchValue.current.condition.text);
    storeResultData("icon", fetchValue.current.condition.icon);
    storeResultData("tz", fetchValue.location.tz_id);

    storeResultData("humidity", fetchValue.current.humidity);
    storeResultData("windspeed", fetchValue.current.wind_kph);
    storeResultData("winddir", fetchValue.current.wind_dir);
    // storeResultData("visibility", fetchValue.current.vis_km);
    storeResultData("uv", fetchValue.current.uv);
    fetchAirQuality(fetchValue.location.lat, fetchValue.location.lon);
    fetchForeCase(fetchValue.location.lat, fetchValue.location.lon);
    fetchSun(fetchValue.location.name);
    // fetchUV(fetchValue.coord.lat, fetchValue.coord.lon);
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
    // console.log(fetchresult);
    fetchresult && setFetchedData(fetchresult);
  }, [fetchresult]);

  useEffect(() => {
    if (resultData.sunrisetimestamp) {
      const sunrise = new Date(resultData.sunrisetimestamp * 1000);
      const sunset = new Date(resultData.sunsettimestamp * 1000);
      const current = new Date();
      // console.log(current, sunrise, sunset);
      if (current >= sunrise && current < sunset) {
        storeResultData("now", "day");
      } else {
        storeResultData("now", "night");
      }
    } else {
      // console.log("no");
    }
  }, [resultData.sunrise]);

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
