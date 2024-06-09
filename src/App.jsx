import React, { useState } from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectContainer from './components/Projects/ProjectContainer';
import Contact from './components/Contact/Contact';
import styles from './App.module.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 200, y: 100 });

  function trackMouse(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div onMouseMove={trackMouse} className="relative ">
      <div
        className={styles.mouse_circle}
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          border: '2px solid pink',
          position: 'fixed ',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`, // Adjusted for scroll position
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
      <Header />
      <Hero />
      <About />
      <ProjectContainer />
      <Contact />
    </div>
  );
}

export default App;
