'use client'
import React from 'react'

export default function CurrentWeather() {
    const [weatherData, setWeatherData] = React.useState({})
    const [isShown, setIsShown] = React.useState(false)

    React.useEffect(
        function () {
            fetch(
                'https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.06&current=temperature_2m,wind_speed_10m&wind_speed_unit=ms'
            )
                .then((res) => res.json())
                .then((data) => setWeatherData(data))
        },
        [isShown]
    )

    return (
        <div>
            <h3>Get Current Weather in Stockholm!</h3>
            <button
                className="toggle_weather"
                onClick={() => setIsShown((prevShown) => !prevShown)}
            >
                {isShown ? 'Hide' : 'Show/Update'}
            </button>
            {isShown && (
                <pre>
                    Temperature:
                    {JSON.stringify(
                        weatherData.current.temperature_2m,
                        null,
                        2
                    )}
                    °C
                    <br />
                    Wind Speed:
                    {JSON.stringify(
                        weatherData.current.wind_speed_10m,
                        null,
                        2
                    )}
                    m/s
                </pre>
            )}
        </div>
    )
}
