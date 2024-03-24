import React from 'react';
import { useTheme } from './ThemeContext'; // Adjust the path as necessary

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme(); // Use both darkMode and the toggle function

  return (
    <button onClick={toggleDarkMode} className={`toggle-btn ${darkMode ? 'dark' : ''}`}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
