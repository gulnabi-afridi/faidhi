'use client';

import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const ContactUs = () => {
  return (
    <div className='w-full h-[220px] sm:h-[350px] md:h-[400px] bg-[url(/assets/contactUs.webp)] bg-cover flex flex-col justify-center items-center bg-no-repeat relative bg-center'>
      <div className='absolute inset-0 bg-black bg-opacity-30'></div>
      <Fade duration={1000} triggerOnce>
        <div className='flex flex-col gap-0 md:gap-0 relative w-full justify-center items-center px-8'>
          <Slide direction='down' duration={1000} triggerOnce>
            <h1 className='text-[35px] sm:text-[50px] text-white-main font-bold tracking-wider opacity-80'>
              Connect With Us
            </h1>
          </Slide>
          <Slide direction='up' duration={1000} delay={500} triggerOnce>
            <p className='text-[16px] sm:text-[22px] leading-[23px] tracking-wide text-center text-white-main font-normal opacity-80'>
              We are always on the lookout for like-minded partners to
              collaborate with, so go on and get in touch with us!
            </p>
          </Slide>
        </div>
      </Fade>
    </div>
  );
};

export default ContactUs;
