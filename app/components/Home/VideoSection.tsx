'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import { Fade, Slide } from 'react-awesome-reveal';
import Image from 'next/image';

const VideoSection = () => {
  return (
    <Wrapper style='bg-white-main py-8 sm:py-16'>
      <div className='w-full grid gap-6 sm:gap-0 lg:gap-10 grid-cols-1 lg:grid-cols-2'>
        {videos.map((item, index) => {
          return (
            <Fade key={index} duration={1500} delay={index * 500} triggerOnce>
              <div className='w-full h-full flex justify-center items-center'>
                <Slide direction='up' duration={1500} triggerOnce>
                  <button
                    key={index}
                    className='w-full h-full max-w-[500px] lg:max-w-none bg-[#efece8] hover:bg-red-main/50 duration-300 p-2 sm:p-4 shadow-xl rounded-md flex flex-col gap-4'
                  >
                    <div className='w-full h-[230px] sm:h-[300px]'>
                      <iframe
                        width='100%'
                        height='100%'
                        className='rounded-md'
                        src={item.video}
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                      <p className='text-[18px] sm:text-[20px] text-black font-medium md:font-semibold'>
                        {item.title}
                      </p>
                      <p className='text-[14px] sm:text-[16px] text-black text-left font-normal'>
                        {item.des}
                      </p>
                    </div>
                  </button>
                </Slide>
              </div>
            </Fade>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default VideoSection;

const videos = [
  {
    video: 'https://www.youtube.com/embed/xXB65UT9PBI',
    title: 'Finders Keepers',
    des: 'Explore the heartwarming tale of home and familial ties in this "kampung," where neighbours are more than just acquaintances—they are family.',
  },
  {
    video: 'https://www.youtube.com/embed/DXUsXEyrc2w',
    title: 'The Lontong Queen',
    des: 'Indulge in a story of family, food, grit, and perseverance, featuring one of Singapores iconic dishes. Witness the journey of a culinary legend in the heart of Tanglin Halt.',
  },
  {
    video: 'https://www.youtube.com/embed/tk7mZnsStpg',
    title: 'A Peace Of You',
    des: 'Experience a narrative of childhood, growth, friendship, and community. Join us as we unveil the bonds that shaped lives within the vibrant tapestry of Tanglin Halt.',
  },
  {
    video: 'https://www.youtube.com/embed/VWpYbdsrL38',
    title: 'Entangled',
    des: 'Immerse yourself in a story of resilience, racial harmony, and service. Discover the nostalgia of a neighbourhood haunt that embodies the collective memories of Tanglin Halt.',
  },
];
