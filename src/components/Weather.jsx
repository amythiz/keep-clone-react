import React, { useEffect, useMemo, useState } from 'react';

const WEATHER_EMOJI_MAP = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌦️',
  53: '🌦️',
  55: '🌧️',
  56: '🌧️',
  57: '🌧️',
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  66: '🌧️',
  67: '🌧️',
  71: '🌨️',
  73: '🌨️',
  75: '❄️',
  77: '❄️',
  80: '🌦️',
  81: '🌧️',
  82: '⛈️',
  85: '🌨️',
  86: '❄️',
  95: '⛈️',
  96: '⛈️',
  99: '⛈️',
};

function Weather({ latitude, longitude, city, timezone = 'Europe/Moscow' }) {
  const [temperature, setTemperature] = useState(null);
  const [weatherCode, setWeatherCode] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadWeather() {
      try {
        const params = new URLSearchParams({
          latitude: String(latitude),
          longitude: String(longitude),
          current: 'temperature_2m,weather_code',
          timezone,
        });

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
        const data = await response.json();

        if (!response.ok || !data?.current) {
          throw new Error('Weather request failed');
        }

        if (isMounted) {
          setTemperature(data.current.temperature_2m);
          setWeatherCode(data.current.weather_code);
          setError(false);
        }
      } catch {
        if (isMounted) {
          setError(true);
        }
      }
    }

    loadWeather();
    const refreshId = setInterval(loadWeather, 10 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(refreshId);
    };
  }, [latitude, longitude, timezone]);

  const weatherEmoji = useMemo(() => {
    if (weatherCode == null) return '🌍';
    return WEATHER_EMOJI_MAP[weatherCode] ?? '🌍';
  }, [weatherCode]);

  if (error) {
    return <div className="weather-widget">{city}: --°C</div>;
  }

  return (
    <div className="weather-widget">
      <span>{weatherEmoji}</span>
      <span>{city}:</span>
      <span>{temperature == null ? '--' : `${Math.round(temperature)}°C`}</span>
    </div>
  );
}

export default Weather;
