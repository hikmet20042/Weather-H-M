import { BsSearch } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useRef, useState } from "react";
import { getInformationAboutCity } from "../utils/getInformationAboutCity";
import { getRecommendedCities } from "../utils/getRecommendedCities";

function WeatherQuery({ searchWord, setSearchWord, setWeatherData }) {
  const searchRef = useRef(null);
  let [recommendedCities, setRecommendedCities] = useState([]);
  let [selectedCity, setSelectedCity] = useState("");
  function handleKeyUp(e) {
    submitFromInput(e);
    searchCities(e);
  }

  async function submitFromButton(e) {
    e.preventDefault();
    if (selectedCity) {
      let infos = await getInformationAboutCity(searchWord);
      searchWord && setWeatherData(infos);
      setSearchWord("");
      setSelectedCity("");
    }
  }

  async function submitFromInput(e) {
    if (e.key === "Enter" && selectedCity) {
      e.preventDefault();
      let infos = await getInformationAboutCity(e.target.value);
      setWeatherData(infos);
      setSearchWord("");
      setSelectedCity("");

      e.target.value = "";
    }
  }

  async function searchCities() {
    let cities = await getRecommendedCities(searchWord);
    setRecommendedCities(cities);
  }

  return (
    <>
      <div className="search-bar">
        <div className="search-bar__button">
          <BsSearch />
        </div>

        <div className="search-bar__input">
          <input
            value={searchWord}
            type="text"
            className="search-bar__input"
            placeholder="Search"
            onKeyUp={handleKeyUp}
            onChange={(e) => {
              setSearchWord(e.target.value);
              searchCities();
            }}
          />
          {!selectedCity && searchWord && (
            <Suggestions
              recommendedCities={recommendedCities}
              setSearchWord={setSearchWord}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          )}
        </div>

        <div
          className="search-bar__delete search-bar__button"
          onClick={() => {
            setSearchWord("");
          }}
        >
          <RiDeleteBack2Line className="delete" />
        </div>
        <div className="search-bar__submit">
          <button type="submit" onClick={submitFromButton}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}

function Suggestions({
  setSearchWord,
  recommendedCities,
  selectedCity,
  setSelectedCity,
}) {
  return (
    <ul className="suggestions">
      {recommendedCities.map((recommendedCity) => {
        return (
          <li
            className="suggestion"
            onClick={(e) => {
              setSearchWord(e.target.textContent.split(",")[0]);
              setSelectedCity(e.target.textContent.split(",")[0]);
            }}
          >
            {recommendedCity.name}, {recommendedCity.country.name}
          </li>
        );
      })}
    </ul>
  );
}

export default WeatherQuery;
