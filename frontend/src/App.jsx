import React from 'react';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Slider from './components/slider';
import './index.css';


function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/2">
          <Hero />
        </div>
        <div className="w-1/2">
          <Slider />
        </div>
      </div>
    </div>
  );
}
export default App;