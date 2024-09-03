function CurrentWeatherTab({ weatherData }) {
  return (
    <div className="current-weather">
      {weatherData && (
        <div className="top-menu">
          <div className="location">
            {weatherData.cityName}, {weatherData.countryName}
          </div>
          <div className="current-weather__temp">
            {weatherData.currentTemperature}°C
          </div>
        </div>
      )}
      {weatherData && (
        <div className="bottom-menu">
          <div className="weather-description">
            <div className="current-weather__desc">
              {weatherData.currentWeatherText}
            </div>
            <div className="current-weather__wind">
              Wind Speed: {weatherData.currentWindKph} KPH
            </div>
          </div>
          <div className="current-weather__img">
            <img src={weatherData.currentWeatherIconURL} alt="weather icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentWeatherTab;
