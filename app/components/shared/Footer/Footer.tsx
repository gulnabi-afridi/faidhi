import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full min-h-[120px] sm:min-h-[120px] md:h-[150px] lg:min-h-[180px] sm:pt-0 pt-8 bg-[#efece8] flex sm:flex-row flex-col gap-0 sm:gap-8 justify-center items-center mt-8 sm:mt-16'>
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
    </div>
  );
};

const logos = [
  {
    link: 'https://honour.sg/',
    src: '/assets/logo.png',
  },
  {
    link: 'https://www.nhb.gov.sg/',
    src: '/assets/logo2.png',
  },
];

export default Footer;
