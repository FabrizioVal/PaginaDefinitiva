import React from 'react';
import { useInView } from 'react-intersection-observer';
import excel from '../assets/excel.png';
import '../styles/styles.css';

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the effect only once
  });

  return (
    <div ref={ref} className="flex items-center justify-center mt-20 bg-white">
      <div className={`max-w-screen-lg mx-auto my-5 flex fade-in ${inView ? 'visible' : ''}`}>
        {/* Image on the left */}
        <div className="flex-shrink-0">
          <img
            src={excel}
            alt="Introduction Image"
            className="w-[400px] h-[400px] my-4 object-cover max-w-1/2"
          />
        </div>

        {/* Text block on the right */}
        <div className="my-10 ml-7 flex-grow ">
          <h2 className="text-center text-2xl font-bold mb-2">Simplifica la forma de procesar tus datos</h2>
          <p className="text-center text-gray-600 mt-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}



export default Introduction;