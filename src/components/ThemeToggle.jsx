import React from 'react';
import { useTheme } from '../context/useTheme';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme} type="button">
      {isDark ? 'Тёмная тема' : 'Светлая тема'}
    </button>
  );
}

export default ThemeToggle;
