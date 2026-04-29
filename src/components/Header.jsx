import React from 'react';
import { Link } from 'react-router-dom';
import Weather from './Weather';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header>
      <div className="header-title">
        <Link className="header-home-link" to="/">📝 React-Keep-clone</Link>
      </div>
      <div className="header-right">
        <ThemeToggle />
        <Link className="header-weather-link" to="/weather" aria-label="Открыть подробный прогноз">
          <Weather latitude={55.7558} longitude={37.6173} city="Москва" timezone="Europe/Moscow" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
