import React from 'react'
import gato1 from '../assets/gato1.jpg'
import gato2 from '../assets/gato2.jpg'

import { FaGithub } from "react-icons/fa";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }} className='my-20 text-center border-4 rounded-xl border-[#9951ff] p-6 mx-20'>
      <h2 className="text-white text-4xl font-bold mb-6">Conoce al equipo</h2>

      <div className='flex flex-wrap justify-center gap-4'>
        
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="mr-4"   
        >
        <Card className="w-60">
          <CardHeader floated={false} className="h-52">
            <img src={gato1} alt="profile-picture-1" />
          </CardHeader>
          <CardBody className="text-center h-28">
            <Typography variant="h4" color="blue-gray" className="mb-2 manrope-font">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="manrope-font font-bold" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="GitHub!">
            <Typography
                as="a"
                href="https://github.com/FabrizioVal"
                variant="lead"
                textGradient
                target="_blank"
            >
                <FaGithub size={24} color="purple" />
            </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }} // Increase the scale on hover
          whileTap={{ scale: 0.95 }}   // Decrease the scale on tap
        >
        <Card className="w-60">
          <CardHeader floated={false} className="h-52">
            <img src={gato2} alt="profile-picture-1" />
          </CardHeader>
          <CardBody className="text-center h-28">
            <Typography variant="h4" color="blue-gray" className="mb-2 manrope-font">
              Miautalia
            </Typography>
            <Typography color="blue-gray" className=" manrope-font font-bold" textGradient>
              Cat food producer
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="GitHub!">
            <Typography
                as="a"
                href="https://github.com/FabrizioVal"
                variant="lead"
                textGradient
                target="_blank"
            >
                <FaGithub size={24} color="purple" />
            </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
        </motion.div>

        {/* Repeat similar blocks for Card 2 to Card 6 with different information */}
      </div>
    </div>
  );
};

export default Aboutus;