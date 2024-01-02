import React from 'react';
import Image from 'next/image';
import Wrapper from '../../shared/ComponentWrapper/ComponentWrapper';

interface Props {
  img: string;
  text: string;
}

const AlumniCard = ({ img, text }: Props) => {
  return (
    <div className='w-full max-w-[1180px] rounded-lg m-auto grid grid-cols-1 bg-red-main/5 p-5 md:grid-cols-[1.5fr,2fr] gap-4 md:gap-0'>
      <div className={`w-full flex justify-center items-center  `}>
        <div
          className={`w-full max-w-[250px] md:max-w-[270px] h-[250px] md:h-[270px] relative `}
        >
          <Image src={img} className='object-cover rounded-full' fill alt='' />
        </div>
      </div>
      <div className={`w-full flex  justify-start items-center  `}>
        <p className='text-[16px] sm:text-[18px] text-left text-black font-normal'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default AlumniCard;
