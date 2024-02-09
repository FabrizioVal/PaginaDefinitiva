import React from 'react'
import {ReactTyped} from 'react-typed';

const Hero = () => {
    
  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }} className='text-white text-left ml-[20px]'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center'>
        <p className='text-[#9951ff] font-bold text-lg md:text-xl lg:text-xl p-2'>
          Pasaje de datos a tu gusto</p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-1'>
             Descargar <span style={{
            backgroundImage: 'linear-gradient(180deg, #9951ff 30%, #CFBDFF)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
             }}>Analytix</span>
        </h1>
        <div>
            <p className=' md:text-4xl sm:text-4xl text-xl font-bold mb-4 mt-2'>Con tus datos, podras</p>
            <ReactTyped
          className=' md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Graficar estadisticas.', 'Comparar informacion.', 'Exportar en diferentes formatos.']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>

        </div>
    </div>
  )
}

export default Hero;

// mt= margin top
// max-w = max width
// w-full = width full
// mx auto = for it to be in the middle
// col = column
// md= medium (for pcs, laptops) sm = small (for phones)