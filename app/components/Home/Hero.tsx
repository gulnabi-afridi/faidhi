'use client';
import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-0px)] bg-[url(/assets/sec.png)] bg-cover bg-no-repeat bg-center relative'>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <Wrapper style='h-full'>
        {/* Text on image */}
        <Fade
          duration={1500}
          delay={500}
          triggerOnce
          className='flex justify-start h-full items-center'
        >
          <div className='flex flex-col gap-4 justify-center h-full items-start z-40 w-full max-w-[900px]'>
            {/* Logos */}
            <Zoom duration={1000} triggerOnce className='w-full'>
              <div className='w-full flex justify-center sm:justify-start items-center'>
                {logos.map((item, index) => (
                  <Link
                    href={item.path}
                    target='blank'
                    key={index}
                    className={`relative hover:opacity-80 ${
                      index === 1
                        ? 'w-[180px] sm:w-[250px] h-[110px] sm:h-[150px] -mt-4 sm:-mt-8'
                        : 'w-[80px] sm:w-[110px] h-[80px] sm:h-[100px] opacity-60'
                    }`}
                  >
                    <Image src={item.img} fill alt='' className='object-fill' />
                  </Link>
                ))}
              </div>
            </Zoom>
            <p className='text-white-main text-[22px] sm:text-[26px] sm:text-left text-center leading-[30px] sm:leading-[36px] font-medium opacity-80'>
              With support from the National Heritage Board, Honour (Singapore)
              presents:
            </p>
            <Slide direction='right' duration={1500} triggerOnce>
              <p className='text-[40px] sm:text-[50px] sm:text-left text-center leading-[45px] sm:leading-[60px] tracking-wide capitalize font-semibold text-white-main'>
                The Tanglin Halt Stories:
              </p>
            </Slide>

            <Slide direction='right' duration={1500} delay={500} triggerOnce>
              <div className='w-full flex flex-col gap-2 sm:gap-3'>
                <p className='text-white-main/90 sm:text-left leading-[26px] sm:leading-[30px] text-center text-[16px] sm:text-[21px] font-normal'>
                  Discover the untold stories of the historic Tanglin Halt
                  neighbourhood. This series seeks to preserve the memories and
                  the bonds of the residents who call this place home. Join us
                  as we delve into the lives of the residents who weathered
                  tumultuous times and progressed alongside the evolving
                  landscape of Singapore.
                </p>
                <p className='text-white-main/90 sm:text-left leading-[26px] sm:leading-[30px] text-center text-[16px] sm:text-[21px] font-normal'>
                  Though the lens of our local filmmakers with a unique
                  storytelling approach, these short films captures the essence
                  of community and friendship, respect and honour, grit and
                  resilience, and the values that define us as Singaporeans -
                  set against the backdrop of the iconic Tanglin Halt
                  neighbourhood.
                </p>
              </div>
            </Slide>
          </div>
        </Fade>
      </Wrapper>
    </div>
  );
};

const logos = [
  {
    img: '/assets/logo.png',
    path: 'https://honour.sg/',
  },
  {
    img: '/assets/logo2.png',
    path: 'https://www.nhb.gov.sg/',
  },
];

export default Hero;
