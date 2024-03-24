// Navbar.js
import React from 'react';
import { useTheme } from './ThemeContext'; // Make sure the path to ThemeContext.js is correct

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme(); // Destructure toggleDarkMode from useTheme

  return (
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Toggle Button */}
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
