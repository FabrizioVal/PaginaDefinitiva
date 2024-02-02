import React from 'react'
import { Button } from "@material-tailwind/react";
import { IoMdDownload } from "react-icons/io"; 

export function DownloadButton() {
    return (
      <div className="flex items-center gap-4">
        <Button className="flex items-center gap-3">
          <IoMdDownload className="h-5 w-5" />
          Descargar ahora
        </Button>
      </div>
    );
  }