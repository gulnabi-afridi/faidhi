'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import Wrapper from '../ComponentWrapper/ComponentWrapper';

const Footer = () => {
  return (
    <div className='w-full py-8 sm:py-12 bg-black'>
      <Wrapper style=' h-full'>
        <Fade duration={1000} triggerOnce>
          <div className='w-full h-full flex gap-[5px] sm:gap-[7px] flex-col'>
            {footerData.map((item, index) => (
              <Slide
                direction='up'
                duration={1000}
                delay={index * 100}
                triggerOnce
                key={index}
              >
                {index + 1 === footerData.length ? (
                  <a
                    href={`mailto:${item}`}
                    target='_blank'
                    rel='noreferrer'
                    className='text-[14px] sm:text-[17px] text-white-main font-semibold'
                  >
                    Email: <span className='opacity-80'>{item}</span>
                  </a>
                ) : (
                  <p className='text-[14px] sm:text-[17px] text-white-main font-semibold'>
                    {item}
                  </p>
                )}
              </Slide>
            ))}
          </div>
        </Fade>
      </Wrapper>
    </div>
  );
};

export default Footer;

const footerData = [
  'Honour (Singapore) Limited',
  '6 Shenton Way, OUE Downtown 2, #24-11',
  'Singapore 068809',
  'Telephone: +65 6438 8175',
  'admin@honour.sg',
];

{
  /* <div className='w-full min-h-[120px] sm:min-h-[120px] md:h-[150px] lg:min-h-[180px] sm:pt-0 pt-4 bg-[#efece8] flex sm:flex-row flex-col gap-0 sm:gap-8 justify-center items-center '>
{logos.map((item, index) => {
  return (
    <Link
      key={index}
      target='/blank'
      href={item.link}
      className={` hover:opacity-80 ${
        index === 1
          ? 'w-[120px] sm:w-[150px] md:w-[240px] h-[70px] sm:h-[100px] md:h-[130px]'
          : 'w-[50px] sm:w-[50px] md:w-[70px] h-[50px] md:h-[80px]'
      }  relative`}
    >
      <Image src={item.src} fill alt='' className='object-fill' />
    </Link>
  );
})}
</div> */
}

// const logos = [
//   {
//     link: 'https://honour.sg/',
//     src: '/assets/logo.png',
//   },
//   {
//     link: 'https://www.nhb.gov.sg/',
//     src: '/assets/logo2.png',
//   },
// ];
