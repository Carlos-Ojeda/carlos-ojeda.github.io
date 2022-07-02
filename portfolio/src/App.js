import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App" id="landing">
      <Header />
      <Landing />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
