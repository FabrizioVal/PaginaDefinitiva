import React from 'react'

import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

const Review = () => {
  return (
    <div>
        <Card className='mx-80 bg-white items-center' color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="mb-1 flex flex-col gap-6 items-center">
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex-1">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Review
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Your review goes here..."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            multiline={true}
          />
        </div>
        <Button className="mt-6" fullWidth>
          Sign Up
        </Button>
      </form>
    </Card>
    </div>
  )
}

export default Review
