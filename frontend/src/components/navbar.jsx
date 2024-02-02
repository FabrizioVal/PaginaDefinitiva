import React from 'react';
import { Button } from '@material-tailwind/react';

const Navbar = () => {
  return (
    <div className='bg-[#5B0888] h-12 flex items-center mb-5'>
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 text-white w-full'>
        <h1 className='w-full text-3xl font-bold text-[#E5CFF7] '>Analytix</h1>
        <div className='flex gap-2'>
          <Button size="sm" color='purple' ripple='light' onClick={() => console.log('Iniciar Sesión clicked')} className='rounded-sm'>
            <span style={{ whiteSpace: 'nowrap' }}>Iniciar Sesión</span>
          </Button>
          <Button size="sm" color='purple' ripple='light' onClick={() => console.log('Registrarse clicked')} className='rounded-sm'>
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
