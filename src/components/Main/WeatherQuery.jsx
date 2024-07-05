import { BsSearch } from 'react-icons/bs'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { useRef } from 'react'
const WeatherQuery = () => {
    const searchRef = useRef(null)
    return (
        <>
            <div className='search-bar'>
                <div className='search-bar__button'>
                    <BsSearch onClick={() => searchRef.current.focus()} />
                </div>
                <input
                    ref={searchRef}
                    type='text'
                    className='search-bar__input'
                    placeholder='Search'
                    onKeyUp={submitFromInput}
                />
                <div
                    className='search-bar__delete search-bar__button'
                    onClick={() => {
                        searchRef.current.value = ''
                        searchRef.current.focus()
                    }}
                >
                    <RiDeleteBack2Line className='delete' />
                </div>

                <button type='submit' onClick={submitFromButton}>
                    Search
                </button>
            </div>
        </>
    )
}
function submitFromButton() {
    e.preventDefault()
    searchRef.current.value &&
        getWeather({
            city: searchRef.current.value,
        })
    searchRef.current.value = ''
}

function submitFromInput(e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        getWeather({ city: e.target.value })
        e.target.value = ''
    }
}
export default WeatherQuery
