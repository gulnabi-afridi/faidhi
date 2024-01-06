'use client';
import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <div className='w-full h-[calc(100vh-0px)] bg-[url(/assets/sec.png)] bg-cover bg-no-repeat bg-center relative'>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <Wrapper style='h-full'>
          {/* text on image */}
          <Fade
            duration={1500}
            delay={500}
            triggerOnce
            className='flex justify-start h-full items-center'
          >
            <div className='flex flex-col gap-4 justify-center h-full items-start z-40 w-full max-w-[900px]'>
              {/* logos */}
              <Zoom duration={1000} triggerOnce>
                <div className='w-full flex justify-center sm:justify-start items-center'>
                  {logos.map((item, index) => (
                    <Link
                      href={item.path}
                      target='blank'
                      key={index}
                      className={`${
                        index === 1
                          ? 'w-[180px] sm:w-[250px] h-[110px] sm:h-[150px] -mt-4 sm:-mt-8'
                          : 'w-[80px] sm:w-[110px] h-[80px] sm:h-[100px]'
                      } relative`}
                    >
                      <Image
                        src={item.img}
                        fill
                        className='object-fill hover:opacity-80'
                        alt=''
                      />
                    </Link>
                  ))}
                </div>
              </Zoom>

              <Slide direction='right' duration={1500} triggerOnce>
                <p className='text-[50px] sm:text-left text-center leading-[60px] tracking-wide capitalize font-semibold text-white-main'>
                  The Tanglin Halt Stories
                </p>
              </Slide>

              <Slide direction='right' duration={1500} delay={500} triggerOnce>
                <p className='text-white-main/90 sm:text-left text-center text-[22px] font-normal'>
                  A disappearing neighbourhood set for redevelopment. Discover
                  the untold stories of Tanglin Halt through four short films
                  that capture the essence of honour, heritage, and resilient
                  spirit that defines the community.
                </p>
              </Slide>
            </div>
          </Fade>
        </Wrapper>
      </div>
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
