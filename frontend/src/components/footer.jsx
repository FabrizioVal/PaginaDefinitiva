import React from 'react';
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div>
      <footer className="h-9 bg-white flex w-full flex-row items-center justify-between border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-bold mx-auto manrope-font">
          2024 Analytix
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;