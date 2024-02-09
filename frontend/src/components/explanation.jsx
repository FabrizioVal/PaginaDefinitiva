import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { motion } from "framer-motion"

  import right_arrow from '../assets/right_arrow.png'
  import { MdDocumentScanner } from "react-icons/md";
  import { FaDigitalTachograph } from "react-icons/fa";
  import { HiDocumentText } from "react-icons/hi2";

const Explanation = () => {
    return (
      
        <div style={{ fontFamily: 'Manrope, sans-serif' }} className='font-bold text-4xl bg-white text-center mb-10 pb-32'> ¿Como funciona Analytix? 
      <div className="mt-12 flex items-center justify-center bg-white">

       
       <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1  }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          className="border-4 border-black w-64 h-96"
        >
          <Card>
            <CardBody>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true }}
              >
                <MdDocumentScanner className="mb-4 h-12 w-12 text-gray-900" />
              </motion.div>

              <Typography variant="h5" color="blue-gray" className="mb-2 manrope-font">
                Paso 1
              </Typography>

              <Typography className="manrope-font">

                explicacion del proceso de meter datos para que sean procesados
              
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
              </a>
            </CardFooter>
          </Card>
        </motion.div>
  
      
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1.5  }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
        >
          <img
            src={right_arrow}
            alt="Right Arrow"
            className="w-12 h-12 mx-4"
          />
        </motion.div>
  
  <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 2  }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          className="border-4 border-black w-64 h-96"
        >
          <Card>
            <CardBody>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaDigitalTachograph className="mb-4 h-12 w-12 text-gray-900" />
              </motion.div>

              <Typography variant="h5" color="blue-gray" className="mb-2 manrope-font">
                Paso 2
              </Typography>

              <Typography className="manrope-font">
                
                explicacion de la edicion de graficos a tu gusto
              
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                {/* Add any additional content or link inside the CardFooter */}
              </a>
            </CardFooter>
          </Card>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 2.5  }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
        >
          <img
            src={right_arrow}
            alt="Right Arrow"
            className="w-12 h-12 mx-4"
          />
        </motion.div>
  
  <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 3  }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true }}
          className="border-4 border-black w-64 h-96"
        >
          <Card>
            <CardBody>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HiDocumentText className="mb-4 h-12 w-12 text-gray-900" />
              </motion.div>

              <Typography variant="h5" color="blue-gray" className="mb-2 manrope-font">
                Paso 3
              </Typography>

              <Typography className="manrope-font">

                explicacion de exportancion pdf
              
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                {/* Add any additional content or link inside the CardFooter */}
              </a>
            </CardFooter>
          </Card>
        </motion.div>

      </div>
      </div>
    );
  };
  
export default Explanation;