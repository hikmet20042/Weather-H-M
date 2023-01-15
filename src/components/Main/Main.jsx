import WeatherQuery from './WeatherQuery'
import CurrentWeatherTab from './CurrentWeatherTab'
import React from 'react'
import getCurrentLocationWeather from './getAllWeatherInformations'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            city: '',
            weatherIcon: '',
        }
    }

    componentDidMount() {
        getCurrentLocationWeather(this.state)
    }
    render() {
        return (
            <>
                <main>
                    <WeatherQuery />
                    <CurrentWeatherTab />
                </main>
            </>
        )
    }
}

export default Main
