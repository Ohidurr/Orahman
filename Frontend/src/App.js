import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
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

export default App;
