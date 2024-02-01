import React from 'react'
import { Carousel } from "@material-tailwind/react";
import stonks1 from '../assets/stonks1.png'
import stonks2 from '../assets/stonks2.png'
import stonks3 from '../assets/stonks3.png'

function Slider () {
  return (
    <div className="flex justify-center items-center mt-[40px]">
    <Carousel className="rounded-xl w-2/3" autoplay={{ loop: true }} loop={true} autoplayDelay={4000}>
      <img
        src={stonks1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={stonks2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={stonks3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
  );
}

export default Slider;