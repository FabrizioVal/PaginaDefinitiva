import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

  import right_arrow from '../assets/right_arrow.png'
  import { MdDocumentScanner } from "react-icons/md";
  import { FaDigitalTachograph } from "react-icons/fa";
  import { HiDocumentText } from "react-icons/hi2";

  import { Fade } from 'react-reveal';

const Explanation = () => {
    return (
      
        <div className='font-bold text-4xl bg-white text-center'> ¿Como funciona Analytix? 
      <div className="mt-12 flex items-center justify-center bg-white">

       
       <Card className="border-4 border-black w-64 h-96">
        <CardBody>
          <MdDocumentScanner className="mb-4 h-12 w-12 text-gray-900" />

          <Typography variant="h5" color="blue-gray" className="mb-2">
           Paso 1
          </Typography>

          <Typography>
            explicacion del proceso de meter datos para que sean procesados
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            {/* Add any additional content or link inside the CardFooter */}
          </a>
        </CardFooter>
      </Card>

  
        {/* Right arrow image */}
        <img
          src={right_arrow} // Replace with your actual image URL
          alt="Right Arrow"
          className="w-12 h-12 mx-4"
        />
  
  <Card className="border-4 border-black w-64 h-96">
        <CardBody>
          <FaDigitalTachograph className="mb-4 h-12 w-12 text-gray-900" />

          <Typography variant="h5" color="blue-gray" className="mb-2">
           Paso 1
          </Typography>

          <Typography>
            explicacion del proceso de meter datos para que sean procesados
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            {/* Add any additional content or link inside the CardFooter */}
          </a>
        </CardFooter>
      </Card>
  
        {/* Right arrow image */}
        <img
          src={right_arrow} // Replace with your actual image URL
          alt="Right Arrow"
          className="w-12 h-12 mx-4"
        />
  
  <Card className="border-4 border-black w-64 h-96">
        <CardBody>
          <HiDocumentText className="mb-4 h-12 w-12 text-gray-900" />

          <Typography variant="h5" color="blue-gray" className="mb-2">
           Paso 1
          </Typography>

          <Typography>
            explicacion del proceso de meter datos para que sean procesados
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            {/* Add any additional content or link inside the CardFooter */}
          </a>
        </CardFooter>
      </Card>

      </div>
      </div>
    );
  };
  
export default Explanation;