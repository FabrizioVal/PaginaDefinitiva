import React, { useState } from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#5B0888]'>
          <div className='flex justify-between items-center h- max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#E5CFF7]'>Analytix</h1>
            <ul className='flex'>
              <li className='p-4' style={{ whiteSpace: 'nowrap' }}>Iniciar Sesion</li>
              <li className='p-4'>Registrarse</li>
            </ul>
          </div>
        </div>
      );
    };

export default Navbar;