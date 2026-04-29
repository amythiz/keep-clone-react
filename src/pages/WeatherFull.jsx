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

function getWeatherEmoji(code) {
  if (code == null) return '🌍';
  return WEATHER_EMOJI_MAP[code] ?? '🌍';
}

function WeatherFull() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadWeatherDetails() {
      try {
        const params = new URLSearchParams({
          latitude: '55.7558',
          longitude: '37.6173',
          timezone: 'Europe/Moscow',
          current: 'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m',
          daily: 'weather_code,temperature_2m_max,temperature_2m_min',
          forecast_days: '7',
        });

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
        const data = await response.json();

        if (!response.ok || !data?.current || !data?.daily) {
          throw new Error('Weather request failed');
        }

        if (isMounted) {
          setWeatherData(data);
          setError(false);
        }
      } catch {
        if (isMounted) {
          setError(true);
        }
      }
    }

    loadWeatherDetails();
    const refreshId = setInterval(loadWeatherDetails, 10 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(refreshId);
    };
  }, []);

  const dailyForecast = useMemo(() => {
    if (!weatherData?.daily) return [];

    const { time, weather_code, temperature_2m_max, temperature_2m_min } = weatherData.daily;
    return time.map((date, index) => ({
      date,
      weatherCode: weather_code[index],
      max: temperature_2m_max[index],
      min: temperature_2m_min[index],
    }));
  }, [weatherData]);

  if (error) {
    return (
      <main className="weather-full-page">
        <h1>Погода в Москве</h1>
        <p>Не удалось загрузить прогноз. Попробуйте позже.</p>
      </main>
    );
  }

  return (
    <main className="weather-full-page">
      <h1>Погода в Москве</h1>
      <section className="weather-current">
        <h2>Сейчас</h2>
        <p className="weather-current-main">
          <span>{getWeatherEmoji(weatherData?.current?.weather_code)}</span>
          <span>{weatherData?.current?.temperature_2m == null ? '--' : `${Math.round(weatherData.current.temperature_2m)}°C`}</span>
        </p>
        <p>Влажность: {weatherData?.current?.relative_humidity_2m ?? '--'}%</p>
        <p>Ветер: {weatherData?.current?.wind_speed_10m ?? '--'} км/ч</p>
      </section>

      <section>
        <h2>Прогноз на 7 дней</h2>
        <div className="weather-forecast-grid">
          {dailyForecast.map((day) => (
            <article className="weather-day-card" key={day.date}>
              <p>{new Date(day.date).toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
              <p className="weather-day-emoji">{getWeatherEmoji(day.weatherCode)}</p>
              <p>Макс: {Math.round(day.max)}°C</p>
              <p>Мин: {Math.round(day.min)}°C</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WeatherFull;
