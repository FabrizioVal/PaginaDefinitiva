import React from 'react';
import { Button } from '@material-tailwind/react';
import { IoMdDownload } from 'react-icons/io';

export function DownloadButton() {
  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }} className=" flex items-center gap-4 ">
      <Button
        
        className=" flex items-center gap-3"
        style={{ backgroundColor: '#784BD7', color: '#ffffff', textTransform: 'none', fontSize: '20px' }}
      >
        <IoMdDownload className="h-5 w-5" />
        Descargar ahora
      </Button>
    </div>
  );
}