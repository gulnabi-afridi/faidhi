import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';

interface Props {
  img: string;
  text: string;
}

const AlumniCard = ({ img, text }: Props) => {
  return (
    <div className={`w-full py-8 sm:py-16`}>
      <Wrapper>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12'>
          <div className={`w-full flex justify-center items-center  `}>
            <div
              className={`w-full max-w-[250px] md:max-w-[300px]  h-[250px] md:h-[300px] relative `}
            >
              <Image
                src={img}
                className='object-cover rounded-full'
                fill
                alt=''
              />
            </div>
          </div>
          <div className={`w-full flex justify-center items-center  `}>
            <p className='text-[16px] text-center sm:text-[18px] text-black font-normal'>
              {text}
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AlumniCard;
