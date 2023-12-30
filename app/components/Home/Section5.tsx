import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import Image from 'next/image';

const Section5 = () => {
  return (
    <Wrapper style='bg-white-main py-16'>
      <div className='w-full grid gap-10 grid-cols-2'>
        {[0, 1, 2, 3].map((item, index) => {
          return (
            <button
              key={index}
              className='w-full bg-red-main/5 p-4 shadow-xl rounded-md flex flex-col gap-4'
            >
              <div className='w-full h-[300px]'>
                <iframe
                  width='100%'
                  height='100%'
                  className='rounded-md'
                  src='https://www.youtube.com/embed/81bLdOJwteA?si=qc8jFPWgoTLrfSUd'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe>
              </div>
              <div className='flex flex-col gap-1 items-start'>
                <p className='text-[20px] text-black font-medium'>
                  Finders Keepers
                </p>
                <p className='text-[16px] text-black text-left font-normal'>
                  Explore the heartwarming tale of home and familial ties in
                  this "kampung," where neighbours are more than just
                  acquaintances—they are family.
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Section5;
