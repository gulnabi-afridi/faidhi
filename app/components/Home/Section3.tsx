import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import Image from 'next/image';

const Section3 = () => {
  return (
    <Wrapper style='bg-white-main py-16'>
      <div className='w-full grid grid-cols-2 gap-12'>
        <div className='w-full flex flex-col justify-center items-start gap-6'>
          <p className='text-black text-[40px] tracking-wider leading-[40px] font-semibold'>
            Before Memories Fade
          </p>
          <p className='text-[18px] text-black font-normal'>
            As progress comes full circle, the iconic flats of Tanglin Halt are
            making way for redevelopment. We want to immortalise the stories and
            spirit of the people who called this neighbourhood home before they
            dissipate into the annals of history.
          </p>
        </div>
        <div className='w-full h-[400px] relative'>
          <Image
            src='/assets/sec2.jpeg'
            className='object-fill rounded-lg'
            fill
            alt=''
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Section3;
