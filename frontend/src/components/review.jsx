import React from 'react'
import '../styles/styles.css'

import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
  

const Review = () => {
  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
        <Card className='mx-80 my-10 bg-white items-center' color="transparent" shadow={false}>
      <Typography className='mt-6 manrope-font' variant="h4" color="blue-gray">
        Comparte tu opinion con nosotros
      </Typography>

      <Typography color="gray" className="mt-6 font-normal manrope-font">
        Cuentanos cual fue tu experiencia. ¡Nos ayuda a seguir mejorando!
      </Typography>

      <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6 items-center">
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <Typography variant="h6" color="blue-gray" className="mb-2 manrope-font">
                Tu nombre
              </Typography>
              <Input
                size="lg"
                placeholder="Nombre"
                className=" border-separate border-t !border-t-blue-gray-200 focus:!border-purple-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex-1">
              <Typography variant="h6" color="blue-gray" className="mb-2 manrope-font">
                Tu email
              </Typography>
              <Input
                color='deep-purple'
                size="lg"
                placeholder="Email"
                className=" border-separate border-t !border-t-blue-gray-200 focus:!border-purple-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <Typography variant="h6" color="blue-gray" className="-mb-3 manrope-font">
            Reseña
          </Typography>
          <div className="relative">
          
          <div className="relative w-[32rem]">
      <Textarea variant="static" placeholder="Reseña" rows={8} color='purple'/>
      <div className="flex w-full justify-between py-1.5">

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          
        <div className="flex gap-2">
          <Button color='deep-purple' size="sm" className="rounded-md manrope-font">
            Subir reseña
          </Button>
        </div>
      </div>
    </div>

        </div>
        </div>
      </form>
    </Card>
    </div>
  )
}

export default Review
