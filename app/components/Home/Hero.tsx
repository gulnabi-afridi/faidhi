'use client';
import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import { Fade, Slide } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div>
      <div className='w-full h-[calc(100vh-0px)] bg-[url(/assets/sec.png)] bg-cover bg-no-repeat bg-center relative'>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <Wrapper style='h-full relative'>
          {/* text on image ------->  */}
          <Fade
            duration={1500}
            delay={500}
            triggerOnce
            className='flex justify-start h-full items-center'
          >
            <div className='flex flex-col gap-4 justify-center h-full items-start z-40 max-w-[900px]'>
              <Slide direction='right' duration={1500} triggerOnce>
                <p className='text-[50px] leading-[60px] tracking-wide capitalize font-semibold text-white-main'>
                  Beyond the Familiar Facade
                </p>
              </Slide>
              <Slide direction='right' duration={1500} delay={500} triggerOnce>
                <p className='text-white-main/90 text-[22px] font-normal'>
                  Discover the untold tales of Tanglin Halt, a disappearing
                  neighbourhood set for redevelopment in December 2021. Join us
                  on a cinematic journey through four compelling short films
                  that capture the essence of honour, heritage, and the
                  resilient spirit that defines this historic community.
                </p>
              </Slide>
            </div>
          </Fade>
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;
