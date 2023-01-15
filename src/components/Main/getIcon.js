//get icon for weather description
const getIcon = (desc, state) => {
  switch (desc) {
    case "Clear":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/sun--v1.png";
      break;
    case "Sunny":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/sun--v1.png";
      break;
    case "Partly cloudy":
      state.weatherIcon =
        "https://img.icons8.com/color/48/000000/partly-cloudy-day--v1.png";
      break;
    case "Cloudy":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/cloud.png";
      break;
    case "Overcast":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/clouds.png";
      break;
    case "Mist":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/fog-day.png";
      break;
    case "Patchy rain possible":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/rain.png";
      break;
    case "Patchy snow possible":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/snow.png";
      break;
    case "Light snow":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/snow.png";
      break;
    case "Patchy sleet possible":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/sleet.png";
      break;
    case "Patchy freezing drizzle possible":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/sleet.png";
      break;
    case "Thundery outbreaks possible":
      state.weatherIcon =
        "https://img.icons8.com/color/48/000000/thunderstorm.png";
      break;
    case "Blowing snow":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/snow.png";
      break;
    case "Blizzard":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/snow.png";
      break;
    case "Fog":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/fog-day.png";
      break;
    case "Freezing fog":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/fog-day.png";
      break;
    case "Patchy light drizzle":
      state.weatherIcon = "https://img.icons8.com/color/48/000000/rain.png";
      break;
    default:
      state.weatherIcon = "https://img.icons8.com/color/48/000000/rain.png";
      break;
  }
};

export default getIcon;
