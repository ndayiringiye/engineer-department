import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Services from './Components/Services';
import About from './Components/About';
import Projects from './Components/Projects';
import MobileNav from './Components/MobileNav';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Skills />
              <About />
              <Services />
              <Projects />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;