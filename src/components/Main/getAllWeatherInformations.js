import getIcon from './getIcon'

//get coordinates from your browser
//components
const getCoordinates = (state) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            state.latitude = position.coords.latitude
            state.longitude = position.coords.longitude
            resolve()
        })
    })
}
//get city name from coordinates
const getCity = (state) => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(
            `https://us1.locationiq.com/v1/reverse?key=pk.fe0230742d7436c69b4a0b620861a341&lat=${state.latitude}&lon=${state.longitude}&format=json`
        )
        const data = await response.json()

        let currentCity = data.address.city
            ? data.address.city.split(' ')[0]
            : data.address.state
        state.city = currentCity
        resolve()
    })
}

//get weather data from city
export const getWeather = (state) => {
    fetch(
        `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=c49c57dd83014ec6b69133154232409&q=${state.city.substring(0,state.city.indexOf(','))}&format=json&num_of_days=1`
    )
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let wind = document.querySelector('.current-weather__wind')
            let weather_img = document.querySelector('.current-weather__img')
            let temp = document.querySelector('.current-weather__temp')
            let desc = document.querySelector('.current-weather__desc')
            temp.innerHTML = `${data.data.current_condition[0].FeelsLikeC}°C`
            desc.innerHTML = `${data.data.current_condition[0].weatherDesc[0].value}`
            wind.innerHTML = `Wind: ${data.data.current_condition[0].windspeedKmph} km/h`
            getIcon(desc, state)
            weather_img.innerHTML = `<img src=${state.weatherIcon} alt="weather icon">`
            document.querySelector('.location').innerHTML =
                data.data.request[0].query
        })
        .catch((err) => console.error(err))
}
//get weather innfprmation for your current location
const getCurrentLocationWeather = async (state) => {
    await getCoordinates(state)
    await getCity(state)
    getWeather(state)
}

export default getCurrentLocationWeather
