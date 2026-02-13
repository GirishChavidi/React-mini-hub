import { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeatherEmoji = (code) => {
    if (code === 0) return "☀️";
    if (code >= 1 && code <= 3) return "☁️";
    if (code >= 45 && code <= 48) return "🌫";
    if (code >= 51 && code <= 67) return "🌧";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 95) return "⛈";
    return "🌤";
  };

  const getWindDirection = (deg) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(deg / 45) % 8];
  };

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const { latitude, longitude } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=apparent_temperature,relativehumidity_2m`
      );

      const data = await weatherRes.json();

      setWeather({
        ...data.current_weather,
        humidity: data.hourly.relativehumidity_2m[0],
        feels: data.hourly.apparent_temperature[0],
      });

      setLoading(false);
    } catch {
      setError("Error fetching weather");
      setLoading(false);
    }
  };

  const getTempClass = () => {
    if (!weather) return "weather-container";
    if (weather.temperature < 15) return "weather-container cold";
    if (weather.temperature <= 30) return "weather-container mild";
    return "weather-container hot";
  };

  return (
    <div className={getTempClass()}>
      <div className={`weather-card ${weather ? "active" : ""}`}>
        <h2>Weather Dashboard</h2>

        <input
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Check Weather</button>

        {loading && <div className="spinner"></div>}
        {error && <p className="error">{error}</p>}

        {!weather && !loading && (
          <div className="welcome">
            <p>🌍 Search any city to see live weather details</p>
          </div>
        )}

        {weather && (
          <div className="weather-details fade-in">
            <div className="emoji">
              {getWeatherEmoji(weather.weathercode)}
            </div>

            <h3>{weather.temperature}°C</h3>
            <p>Feels like: {weather.feels}°C</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>
              Wind: {weather.windspeed} km/h (
              {getWindDirection(weather.winddirection)})
            </p>
            <p className="updated">Updated: {weather.time}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
