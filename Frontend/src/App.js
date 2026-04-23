import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Writing from './Components/Writing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { writing } from './data/content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Landing />
        <Portfolio />
        <About />
        {writing.length > 0 && <Writing />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
