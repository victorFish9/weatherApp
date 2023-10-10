export default function WeatherInput(props) {
    return (
        <>
            <h2>Welcome to Weather app!</h2>
            <input type='text' value={props.city} onChange={props.handleCityChange} /><br /><br />
            <button onClick={props.fetchWeatherData}>Search</button>
        </>
    )
}