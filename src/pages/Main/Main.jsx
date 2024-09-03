import WeatherQuery from "./components/WeatherQuery";
import CurrentWeatherTab from "./components/CurrentWeatherTab";
import React from "react";
import { useState } from "react";
import "./css/main.css";
export default function Main() {
  let [searchWord, setSearchWord] = useState("");
  let [weatherData, setWeatherData] = useState();
  return (
    <>
      <main>
        <WeatherQuery
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          setWeatherData={setWeatherData}
        />
        <CurrentWeatherTab weatherData={weatherData} />
      </main>
    </>
  );
}
