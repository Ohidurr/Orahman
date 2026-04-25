import React from 'react';
import './App.css';

import BgScene from './Components/BgScene';
import Navbar from './Components/Navbar';
import PaletteIndicator from './Components/PaletteIndicator';
import Landing from './Components/Landing';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Education from './Components/Education';
import DailyCard from './Components/DailyCard';
import Now from './Components/Now';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import { useReveal } from './hooks/useReveal';
// Import to trigger the random palette pick (and apply it to <html>)
import { usePalette } from './hooks/usePalette';

function App() {
  // Pick palette once at mount — sets the data-palette attr on <html>.
  usePalette();

  // The reveal hook scans for `.panel` elements inside the returned ref.
  const sectionsRef = useReveal();

  return (
    <div className="App">
      <BgScene />
      <Navbar />
      <PaletteIndicator />

      <div className="shell">
        <Landing />

        <div className="sections" ref={sectionsRef}>
          <div className="col-left">
            {/* 00 Summary lives in the Landing hero (mode toggle) */}
            {/* 01 Experience */}
            <About />
            {/* 02 Skills */}
            <Skills />
            {/* 03 Projects */}
            <Portfolio />
          </div>

          <div className="col-right">
            {/* 04 Education */}
            <Education />
            {/* Daily word + fact */}
            <DailyCard />
            {/* 05 Now */}
            <Now />
          </div>

          {/* Contact spans the full width */}
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
