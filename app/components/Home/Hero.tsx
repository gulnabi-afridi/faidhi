'use client';
import React, { useState } from 'react';
import HeroCard from './Cards/HeroCard';
import Slider from 'react-slick';
import { MdNavigateNext } from 'react-icons/md';

const Hero = () => {
  const [navigateSlideItem, setNavigateSlideItem] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    pauseOnHover: false,
  };

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          setNavigateSlideItem(true);
        }}
        className='absolute right-0 w-[15px] sm:w-[30px] h-[35px] sm:h-[56px] rounded-l-[10px] bg-red-main/80 hover:opacity-80 cursor-pointer top-[43%] flex justify-center items-center'
      >
        <MdNavigateNext className='text-[20px] sm:text-[32px] text-white-main/70' />
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
        className='absolute left-0 w-[15px] sm:w-[30px] h-[35px] sm:h-[56px] z-20 rounded-r-[10px] bg-red-main/80 hover:opacity-80 cursor-pointer top-[45%] flex justify-center items-center'
      >
        <MdNavigateNext className='text-[20px] sm:text-[32px] text-white-main/70 rotate-180' />
      </div>
    );
  }

  return (
    <div className='w-full sm:h-screen overflow-hidden h-[50vh] '>
      <Slider {...settings}>
        {heroCardData.map((item, index) => {
          return (
            <HeroCard
              key={index}
              bgImage={item.image}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </Slider>
    </div>
  );
};

const heroCardData = [
  {
    image: 'bg-[url(/assets/sec.png)]',
    title: 'Beyond the Familiar Facade',
    subTitle: [
      'Discover the untold tales of Tanglin Halt, a disappearing neighbourhood set for redevelopment in December 2021. Join us on a cinematic journey through four compelling short films that capture the essence of honour, heritage, and the resilient spirit that defines this historic community.',
    ],
  },
  {
    image: 'bg-[url(/assets/sec1.png)]',
    title: 'Unearthing Human Stories',
    subTitle: [
      "Beyond the bricks and mortar lie the heartwarming stories of Tanglin Halt's residents. These short films delve into the lives of individuals and families who weathered tumultuous times, triumphed over adversities, and progressed alongside the evolving landscape of Singapore.",
    ],
  },
  {
    image: 'bg-[url(/assets/sec2.jpeg)]',
    title: 'Before Memories Fade',
    subTitle: [
      'As progress comes full circle, the iconic flats of Tanglin Halt are making way for redevelopment. We want to immortalise the stories and spirit of the people who called this neighbourhood home before they dissipate into the annals of history.',
    ],
  },
  {
    image: 'bg-[url(/assets/sec3.png)]',
    title: 'The Honour Film Initiative',
    subTitle: [
      'The Tanglin Halt series is an integral part of our mission to empower young, emerging filmmakers in bringing untold stories to life.',
      'The Honour Film Initiative enables emerging filmmakers to tell stories that otherwise may never get told. Stories of honour in its various dimensions: Integrity, respect, resilience, thrift and hard work.',
      'Selected short films are presented at the Honour Film Screening twice a year to honour the hidden, unsung heroes in our midst who embody the value of honour.',
    ],
  },
];

export default Hero;
