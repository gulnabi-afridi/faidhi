import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';

interface Props {
  img: string;
  text: string;
  isRight: boolean;
  secIndex: number;
}

const AlumniCard = ({ img, text, isRight, secIndex }: Props) => {
  const isEvenSection = secIndex % 2 === 0;
  const bgColor = isEvenSection ? 'bg-white-main' : 'bg-[#efece8]';
  return (
    <div className={`w-full py-8 sm:py-16 ${bgColor}`}>
      <Wrapper>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12'>
          <div
            className={`w-full flex justify-center items-center ${
              isRight ? 'md:order-1 order-2' : 'order-2 md:order-2'
            } `}
          >
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
          <div
            className={`w-full flex justify-center items-center ${
              isRight ? 'order-1 md:order-2' : 'order-1 md:order-1'
            } `}
          >
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
