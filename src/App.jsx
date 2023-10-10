import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  // Fetching data from json to weatherData
  const fetchWeatherData = () => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9343f8a9dd9aa86bc05ceb1398921a96`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('City not found');
          }
          return response.json();
        })
        .then((data) => {
          setError(null);
          setWeatherData(data);
        })
        .catch((error) => {
          console.error("Error is this: ", error);
          setWeatherData(null);
          setError("City not found. Please enter a valid city name.");
        })
    }
  }

  return (
    <>
      <h2>Welcome to Weather app!</h2>
      <input type='text' value={city} onChange={handleCityChange} /><br /><br />
      <button onClick={fetchWeatherData}>Search</button>
      {error ? (<p>{error}</p>) : (weatherData ? (
        <div>
          <h4>Weather in {weatherData.name}</h4>
          <p>Temperature: {Number(weatherData.main.temp - 273.15).toFixed(1)}C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
          {weatherData.weather[0].icon && (
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
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

export default App
