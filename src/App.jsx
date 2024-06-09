import React, { useState } from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjectContainer from './components/Projects/ProjectContainer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 200, y: 100 });

  function trackMouse(e) {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div onMouseMove={trackMouse} className="relative ">
      <span
        className="mouse_circle z-0 "
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          border: '1px solid green',
          position: 'fixed ',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`, // Adjusted for scroll position
          transform: 'translate(-50%, -50%)',
        }}
      ></span>
      <Header />
      <Hero />
      <About />
      <ProjectContainer />
    </div>
  );
}

export default App;
