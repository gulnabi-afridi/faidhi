import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';

interface Props {
  img: string;
  title: string;
  des: string;
  secIndex: number;
  isRight: boolean;
}

const SectionCard = ({ img, title, des, secIndex, isRight = true }: Props) => {
  const isEvenSection = secIndex % 2 === 0;
  const bgColor = isEvenSection ? 'bg-white-main' : 'bg-[#efece8]';
  return (
    <div className={`w-full py-8 sm:py-16 ${bgColor}`}>
      <Wrapper>
        <div className='w-full flex flex-col-reverse sm:grid grid-cols-[1.2fr,1fr] md:grid-cols-2 gap-4 md:gap-8 lg:gap-12'>
          <div
            className={`w-full h-[230px] sm:h-[300px] lg:h-[400px] relative ${
              isRight ? 'order-1' : 'order-2'
            } `}
          >
            <Image src={img} className='object-cover rounded-lg' fill alt='' />
          </div>
          <div
            className={`w-full flex flex-col justify-center items-start gap-2 sm:gap-4 ${
              isRight ? 'order-2' : 'order-1'
            } lg:gap-6`}
          >
            <p className='text-black text-[30px] md:text-[35px] lg:text-[40px] tracking-wider leading-[35px] md:leading-[40px] font-semibold'>
              {title}
            </p>
            <p className='text-[16px] sm:text-[18px] text-black font-normal'>
              {des}
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SectionCard;
