import React, { useEffect } from 'react';
import './App.css';
import './i18n';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { applyCSSVariables } from './config/cssVariables';

function App() {
  useEffect(() => {
    // Apply CSS variables from design system
    applyCSSVariables();
  }, []);

  return (
    <div className="App" id="landing">
      <Header />
      <Landing />
      <div className="content-container">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
