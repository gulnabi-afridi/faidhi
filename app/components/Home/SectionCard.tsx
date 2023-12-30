import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';

interface Props {
  img: string;
  title: string;
  des: string;
  secIndex: number;
}

const SectionCard = ({ img, title, des, secIndex }: Props) => {
  const isEvenSection = secIndex % 2 === 0;
  const bgColor = isEvenSection ? 'bg-white-main' : 'bg-black/10';
  return (
    <div className={`w-full py-16 ${bgColor}`}>
      <Wrapper>
        <div className='w-full grid grid-cols-2 gap-12'>
          <div className='w-full h-[400px] relative'>
            <Image src={img} className='object-cover rounded-lg' fill alt='' />
          </div>
          <div className='w-full flex flex-col justify-center items-start gap-6'>
            <p className='text-black text-[40px] tracking-wider leading-[40px] font-semibold'>
              {title}
            </p>
            <p className='text-[18px] text-black font-normal'>{des}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SectionCard;
