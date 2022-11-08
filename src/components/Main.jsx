import { BsSearch } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useEffect } from "react";

export default function Main() {
  let latitude, longitude, city, weather_icon;
  const getCoordinates = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        resolve();
      });
    });
  };

  const getCity = async () => {
    await getCoordinates();

    return new Promise((resolve, reject) => {
      fetch(
        `https://us1.locationiq.com/v1/reverse?key=pk.fe0230742d7436c69b4a0b620861a341&lat=${latitude}&lon=${longitude}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          city = data.address.city
            ? data.address.city.split(" ")[0]
            : data.address.state;
          document.querySelector(".location").innerHTML =
            city + ", " + data.address.country;
          resolve();
        });
    });
  };

  const getWeather = async () => {
    let search = document.querySelector(".search-bar__input");
    if (search) {
      city = search.value;
    } else {
      await getCity();
    }
    fetch(
      `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=dc4235a8cc51465d9d9101441220311&q=${city}&format=json&num_of_days=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let wind = document.querySelector(".current-weather__wind");
        let weather_img = document.querySelector(".current-weather__img");
        let temp = document.querySelector(".current-weather__temp");
        let desc = document.querySelector(".current-weather__desc");
        temp.innerHTML = `${data.data.current_condition[0].FeelsLikeC}°C`;
        desc.innerHTML = `${data.data.current_condition[0].weatherDesc[0].value}`;
        wind.innerHTML = `Wind: ${data.data.current_condition[0].windspeedKmph} km/h`;
        switch (data.data.current_condition[0].weatherDesc[0].value) {
          case "Clear":
            weather_icon = "https://img.icons8.com/color/48/000000/sun--v1.png";
            break;
          case "Sunny":
            weather_icon = "https://img.icons8.com/color/48/000000/sun--v1.png";
            break;
          case "Partly cloudy":
            weather_icon =
              "https://img.icons8.com/color/48/000000/partly-cloudy-day--v1.png";
            break;
          case "Cloudy":
            weather_icon = "https://img.icons8.com/color/48/000000/cloud.png";
            break;
          case "Overcast":
            weather_icon = "https://img.icons8.com/color/48/000000/clouds.png";
            break;
          case "Mist":
            weather_icon = "https://img.icons8.com/color/48/000000/fog-day.png";
            break;
          case "Patchy rain possible":
            weather_icon = "https://img.icons8.com/color/48/000000/rain.png";
            break;
          case "Patchy snow possible":
            weather_icon = "https://img.icons8.com/color/48/000000/snow.png";
            break;
          case "Patchy sleet possible":
            weather_icon = "https://img.icons8.com/color/48/000000/sleet.png";
            break;
          case "Patchy freezing drizzle possible":
            weather_icon = "https://img.icons8.com/color/48/000000/sleet.png";
            break;
          case "Thundery outbreaks possible":
            weather_icon =
              "https://img.icons8.com/color/48/000000/thunderstorm.png";
            break;
          case "Blowing snow":
            weather_icon = "https://img.icons8.com/color/48/000000/snow.png";
            break;
          case "Blizzard":
            weather_icon = "https://img.icons8.com/color/48/000000/snow.png";
            break;
          case "Fog":
            weather_icon = "https://img.icons8.com/color/48/000000/fog-day.png";
            break;
          case "Freezing fog":
            weather_icon = "https://img.icons8.com/color/48/000000/fog-day.png";
            break;
          case "Patchy light drizzle":
            weather_icon = "https://img.icons8.com/color/48/000000/rain.png";
            break;
          default:
            weather_icon = "https://img.icons8.com/color/48/000000/rain.png";
            break;
        }
        weather_img.innerHTML = `<img src=${weather_icon} alt="weather icon">`;
        document.querySelector(".location").innerHTML =
          data.data.request[0].query;
      });
  };
  getWeather();
  return (
    <main>
      <form action="#">
        <div className="search-bar">
          <div className="search-bar__button">
            <BsSearch onClick={(e) => e.target.nextElementSibling.focus()} />
          </div>
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search"
          />
          <div
            className="search-bar__delete search-bar__button"
            onClick={(e) => {
              e.target.previousElementSibling.value = "";
              e.target.previousElementSibling.focus();
            }}
          >
            <RiDeleteBack2Line className="delete" />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              getWeather();
            }}
          >
            Search
          </button>
        </div>
      </form>
      <div className="current-weather">
        <div className="top-menu">
          <div className="location"></div>
          <div className="current-weather__temp"></div>
        </div>
        <div className="bottom-menu">
          <div className="weather-description">
            <div className="current-weather__desc"></div>
            <div className="current-weather__wind"></div>
          </div>
          <div className="current-weather__img"></div>
        </div>
      </div>
    </main>
  );
}
