import React from 'react';
import './App.css';

import BgScene from './Components/BgScene.jsx';
import Navbar from './Components/Navbar.jsx';
import PaletteIndicator from './Components/PaletteIndicator.jsx';
import Landing from './Components/Landing.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Education from './Components/Education.jsx';
import DailyCard from './Components/DailyCard.jsx';
import Now from './Components/Now.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

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
