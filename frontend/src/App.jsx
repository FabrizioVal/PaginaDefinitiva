import React from 'react';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Slider from './components/slider';
import { DownloadButton } from './components/downloadbutton';
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
          <div className="flex justify-center mt-12"> 
            <DownloadButton />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;