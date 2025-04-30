import React from 'react';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CyberDivision from './components/sections/CyberDivision';
import ComingSoon from './components/sections/ComingSoon';
import Contact from './components/sections/Contact';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <div className="relative">
      <ParallaxBackground />
      <Layout>
        <Hero />
        <About />
        <CyberDivision />
        <ComingSoon />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;