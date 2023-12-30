import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';

const Section2 = () => {
  return (
    <Wrapper style='bg-black/10 py-16'>
      <div className='w-full grid grid-cols-2 gap-12'>
        <div className='w-full h-[400px] relative'>
          <Image
            src='/assets/sec1.png'
            className='object-cover rounded-lg'
            fill
            alt=''
          />
        </div>
        <div className='w-full flex flex-col justify-center items-start gap-6'>
          <p className='text-black text-[40px] tracking-wider leading-[40px] font-semibold'>
            Unearthing Human Stories
          </p>
          <p className='text-[18px] text-black font-normal'>
            Beyond the bricks and mortar lie the heartwarming stories of Tanglin
            Halt&apos;s residents. These short films delve into the lives of
            individuals and families who weathered tumultuous times, triumphed
            over adversities, and progressed alongside the evolving landscape of
            Singapore.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section2;
