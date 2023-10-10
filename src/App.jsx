import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherView from './components/WeatherView';
import WeatherInput from './components/WeatherInput';

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
      <WeatherInput city={city} handleCityChange={handleCityChange} fetchWeatherData={fetchWeatherData} />
      <WeatherView error={error} weatherData={weatherData} />

    </>
  )
}

export default App
