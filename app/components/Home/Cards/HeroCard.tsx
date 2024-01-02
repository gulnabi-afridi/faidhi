import React from 'react';
import Wrapper from '../../shared/ComponentWrapper/ComponentWrapper';

interface Props {
  bgImage: string;
  title: string;
  subTitle: string[];
}

const HeroCard = ({ bgImage, title, subTitle }: Props) => {
  return (
    <div
      className={`w-full h-[50vh] sm:h-[calc(100vh-0px)] ${bgImage} bg-cover bg-no-repeat bg-center relative`}
    >
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>
      <Wrapper style='h-full relative'>
        {/* text on image ------->  */}
        <div className='flex flex-col gap-4 justify-center h-full items-center sm:items-start z-40 max-w-[900px]'>
          <p className=' text-[25px] sm:text-[35px] md:text-[50px] sm:text-left text-center leading-[23px] sm:leading-[44px] md:leading-[60px] tracking-wide capitalize font-semibold text-white-main'>
            {title}
          </p>
          <div className='w-full flex flex-col gap-1 sm:gap-4'>
            {subTitle?.map((item, index) => {
              return (
                <p
                  key={index}
                  className='text-white-main/90 sm:text-left text-center text-[14px] sm:text-[16px] md:text-[22px] font-normal'
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroCard;
