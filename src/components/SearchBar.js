import React, { useState } from 'react';

function SearchBar({ setWeatherData }) {
  const [city, setCity] = useState('');

  const API_KEY = process.env.REACT_APP_WEATHER_KEY;

  const handleSearch = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert(data.message);
        setWeatherData(null);
      }
    } catch (error) {
      alert('Error fetching weather data');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
