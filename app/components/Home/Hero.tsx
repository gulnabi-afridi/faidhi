import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';

const Hero = () => {
  return (
    <div>
      <div className='w-full h-[calc(100vh-0px)] bg-[url(/assets/hero.png)] bg-cover bg-no-repeat bg-center relative'>
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <Wrapper style='h-full relative'>
          {/* text on image ------->  */}
          <div className='flex flex-col gap-4 justify-center h-full items-start z-40 max-w-[900px]'>
            <p className='text-[35px] sm:text-[50px] sm:text-left text-center  leading-[43px] sm:leading-[60px] tracking-wide capitalize font-semibold text-white-main'>
              Tanglin Halt: Beyond the Familiar Facade
            </p>
            <p className='text-white-main/90 sm:text-left text-center text-[18px] sm:text-[22px] font-normal'>
              Discover the untold tales of Tanglin Halt, a disappearing
              neighbourhood set for redevelopment in December 2021. Join us on a
              cinematic journey through four compelling short films that capture
              the essence of honour, heritage, and the resilient spirit that
              defines this historic community.
            </p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;
