const CurrentWeatherTab = () => (
    <div className='current-weather'>
        <div className='top-menu'>
            <div className='location'></div>
            <div className='current-weather__temp'></div>
        </div>
        <div className='bottom-menu'>
            <div className='weather-description'>
                <div className='current-weather__desc'></div>
                <div className='current-weather__wind'></div>
            </div>
            <div className='current-weather__img'></div>
        </div>
    </div>
)

export default CurrentWeatherTab
