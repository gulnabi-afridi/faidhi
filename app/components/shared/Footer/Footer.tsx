import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full min-h-[220px] md:min-h-[280px] sm:pt-0 pt-10 bg-[#efece8] grid grid-cols-1 sm:grid-cols-2 justify-center items-center'>
      {logos.map((item, index) => {
        return (
          <div key={index} className='w-full flex justify-center items-center'>
            <Link
              href={item.link}
              className={`w-full hover:opacity-80 ${
                index === 1
                  ? 'max-w-[200px] sm:max-w-[240px] md:max-w-[300px] h-[140px] sm:h-[170px] md:h-[200px]'
                  : 'max-w-[100px] sm:max-w-[150px] md:max-w-[180px] h-[80px] md:h-[130px]'
              }  relative`}
            >
              <Image src={item.src} fill alt='' className='object-fill' />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const logos = [
  {
    link: '#',
    src: '/assets/logo.png',
  },
  {
    link: '#',
    src: '/assets/logo2.png',
  },
];

export default Footer;
