import React from 'react';

import Auth from './pages/Auth';
import Home from './pages/Home';

import Introduction from './components/introduction';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Slider from './components/slider';
import { DownloadButton } from './components/downloadbutton';

import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="flex section">
        <div className="w-1/2">
          <Hero />
        </div>
        <div className="w-1/2">
          <Slider />
          <div className="flex justify-center mt-12"> 
            <DownloadButton />
          </div>
        </div>
      </div>
      <Introduction />
    </div>
  );
}

export default App;