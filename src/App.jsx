// App.js
import React from 'react';
import Navbar from './components/Navbar';
import SliderSection from './components/Slider';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <SliderSection />
      <Products />
      <About />
      <Contact />
    </div>
  );
};

export default App;
 