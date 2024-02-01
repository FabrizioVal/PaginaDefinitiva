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

import { Button } from "@material-tailwind/react";
 
export function DownloadButton() {
  return (
    <div className="flex items-center gap-4">
      <Button className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        Add to Bookmark
      </Button>
    </div>
  );
}

export default Slider;
