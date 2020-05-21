import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ location }) => {

    const [weather, setWeather] = useState()

    useEffect(() => {
        axios.get(`https://api.codetabs.com/v1/weather?city=${location}`)
            .then(res => {
                const temp = parseFloat(res.data.tempC)
                setWeather(temp.toFixed(1))
            })
    }, [location])


    return (
        <div>
            {location} {weather} &deg;C
        </div>
    )
}

export default Weather
