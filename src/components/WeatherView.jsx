export default function WeatherView(props) {
    return (
        <>
            {props.error ? (<p>{props.error}</p>) : (props.weatherData ? (
                <div>
                    <h4>Weather in {props.weatherData.name}</h4>
                    <p>Temperature: {Number(props.weatherData.main.temp - 273.15).toFixed(1)}C</p>
                    <p>Weather: {props.weatherData.weather[0].main}</p>
                    {props.weatherData.weather[0].icon && (
                        <img src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`}
                            alt="Weather Icon" />
                    )}
                </div>
            ) : (
                <p>Enter city name</p>
            )
            )}
        </>
    )
}