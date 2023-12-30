import React from 'react';
import Image from 'next/image';
import Wrapper from '../ComponentWrapper/ComponentWrapper';
import Link from 'next/link';

const Navibar = () => {
  return (
    <Wrapper style='h-[80px] w-full'>
      <div className='w-full h-full flex justify-between items-center'>
        {/* logo ----->  */}
        <div className='w-[60px] h-[60px] relative'>
          <Image src='/assets/logo.png' alt='' fill className='object-fill' />
        </div>
        {/* links ----->  */}
        <div className='flex justify-center items-center gap-12'>
          {links.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={` ${
                  item.path === '/'
                    ? 'text-red-main font-medium'
                    : 'text-white-light font-normal'
                } text-[16px] capitalize relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-red-main hover:after:w-full after:duration-200`}
              >
                {item.link}
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const links = [
  {
    path: '/',
    link: 'home',
  },

  {
    path: '#',
    link: 'our services',
  },
  {
    path: '#',
    link: 'about us',
  },
  {
    path: '#',
    link: 'our gallery',
  },
  {
    path: '#',
    link: 'contact us',
  },
  {
    path: '#',
    link: 'Our team',
  },
];

export default Navibar;
