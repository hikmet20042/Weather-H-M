export async function getInformationAboutCity(city) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=6a4f7671da16412497d110824240109&q=${city}&days=1&aqi=no&alerts=no`
  );
  let data = await response.json();
  let cityName = data.location.name;
  let countryName = data.location.country;
  let currentWeatherText = data.current.condition.text;
  let currentWeatherIconURL = data.current.condition.icon;
  let currentTemperature = data.current.temp_c;
  let currentHumidity = data.current.humidity;
  let currentWindKph = data.current.wind_kph;
  return {
    cityName,
    countryName,
    currentHumidity,
    currentWeatherText,
    currentTemperature,
    currentWeatherIconURL,
    currentWindKph,
  };
}
