import React, { useEffect, lazy, Suspense } from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import './i18n';
import Header from './components/Header';
import Landing from './components/Landing';
import ErrorBoundary from './components/ErrorBoundary';
import { applyCSSVariables } from './config/cssVariables';

const AboutMe = lazy(() => import('./components/AboutMe'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    applyCSSVariables();
  }, []);

  return (
    <ErrorBoundary>
      <div className="App" id="landing">
        <Header />
        <Landing />
        <Suspense fallback={null}>
          <div className="content-container">
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
          </div>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
