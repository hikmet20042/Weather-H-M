import WeatherQuery from './WeatherQuery'
import CurrentWeatherTab from './CurrentWeatherTab'
import React from 'react'

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
