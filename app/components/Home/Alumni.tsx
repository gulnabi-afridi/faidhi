'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import AlumniCard from './Cards/AlumniCard';
import { MdNavigateNext } from 'react-icons/md';

const Alumni = () => {
  const [navigateSlideItem, setNavigateSlideItem] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //   custom navigation buttons =====>

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          setNavigateSlideItem(true);
        }}
        className='absolute right-0 w-[26px] h-[26px] rounded-full bg-red-main hover:opacity-80 cursor-pointer top-1/2 flex justify-center items-center'
      >
        <MdNavigateNext className='text-[20px] text-white-main' />
      </div>
    );
  }

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          setNavigateSlideItem(true);
        }}
        className='w-[26px] cursor-pointer left-0 top-1/2 z-30 absolute h-[26px] hover:opacity-80 rounded-full bg-red-main flex justify-center items-center'
      >
        <MdNavigateNext className='text-[20px] text-white-main rotate-180' />
      </div>
    );
  }

  return (
    <div className='w-full max-w-[1200px]  overflow-hidden m-auto py-8 sm:py-16 '>
      <Slider {...settings}>
        {alumniData.map((item, index) => {
          return <AlumniCard key={index} img={item.img} text={item.text} />;
        })}
      </Slider>
    </div>
  );
};

export default Alumni;

const alumniData = [
  {
    img: '/assets/brenda.jpeg',
    text: '“Honour is a value that can be very powerful in changing somebody’s life.” - Brenda Er, Director of Tanglin Halt Series',
    isRight: true,
  },
  {
    img: '/assets/jasmine.jpeg',
    text: '“Honour is a value that can be very powerful in changing somebody’s life.” - Brenda Er, Director of Tanglin Halt Series',
    isRight: false,
  },
];
