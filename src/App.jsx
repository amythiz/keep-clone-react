import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import WeatherFull from './pages/WeatherFull';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/weather" element={<WeatherFull />} />
      </Routes>
    </div>
  );
}

export default App;