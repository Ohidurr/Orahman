import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { ThemeProvider, useTheme } from './Components/ThemeContext'; // Import ThemeProvider and useTheme

function App() {
  const { darkMode } = useTheme(); // Access the darkMode state to apply conditional styling

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}> {/* Conditionally apply dark-mode class */}
      <header>
        <Navbar />
        <Landing />
      </header>
      <main>
        <section id="About">
          <About />
        </section>
        <Portfolio />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Ohidur Rahman. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Wrap App component with ThemeProvider to make the theme context available throughout the application
function AppWithThemeProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWithThemeProvider; // Export the wrapped version
