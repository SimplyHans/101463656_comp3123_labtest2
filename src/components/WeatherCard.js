import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather } = data;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p className="description">{weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
