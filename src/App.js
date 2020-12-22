import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);

      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className='banner'>
      <div className='main_container'>
        <div className='app_title'>
          <h1 className='app_title'>Weather</h1>
          <sup>.ken</sup>
        </div>
        <div className='app_input'>
          <input
            type='text'
            className='search'
            placeholder='Search Location...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>

        {weather.main && (
          <div className='city'>
            <div>
              <h2 className='city_name'>
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className='city_temp'>
                {Math.round(weather.main.temp)}
                <sup>&deg; C</sup>
              </div>
            </div>
            <div className='info'>
              <img
                className='city-icon'
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p className='weather-description'>
                {weather.weather[0].description}
              </p>
            </div>
          </div>
        )}
        {weather.main && (
          <div className='weather_features'>
            <div className='weather_feature'>
              <img
                src='https://www.flaticon.com/svg/static/icons/svg/616/616546.svg'
                alt='humidity'
                width='60'
                height='30'
              />
              <p>{weather.main.humidity}</p>
              <p>Humidity</p>
            </div>
            <div className='weather_feature'>
              <img
                src='https://www.flaticon.com/svg/static/icons/svg/2898/2898726.svg'
                alt='pressure'
                width='60'
                height='30'
              />
              <p> {weather.main.pressure}</p>
              <p>Pressure</p>
            </div>
            <div className='weather_feature'>
              <img
                src='https://www.flaticon.com/svg/static/icons/svg/3050/3050874.svg'
                alt='wind'
                width='60'
                height='30'
              />
              <p> {weather.wind.speed}</p>
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
