import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import Image from 'next/image';

const VideoSection = () => {
  return (
    <Wrapper style='bg-white-main py-16'>
      <div className='w-full grid gap-10 grid-cols-2'>
        {videos.map((item, index) => {
          return (
            <button
              key={index}
              className='w-full bg-red-main/5 p-4 shadow-xl rounded-md flex flex-col gap-4'
            >
              <div className='w-full h-[300px]'>
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
                <p className='text-[20px] text-black font-medium'>
                  {item.title}
                </p>
                <p className='text-[16px] text-black text-left font-normal'>
                  {item.des}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

const videos = [
  {
    video: 'https://www.youtube.com/embed/81bLdOJwteA?si=qc8jFPWgoTLrfSUd',
    title: 'Finders Keepers',
    des: 'Explore the heartwarming tale of home and familial ties in this "kampung," where neighbours are more than just acquaintances—they are family.',
  },
  {
    video: 'https://www.youtube.com/embed/XRQgCU_ZnJM?si=r8NO5g-aWxnObXRG',
    title: 'The Lontong Queen',
    des: 'Indulge in a story of family, food, grit, and perseverance, featuring one of Singapores iconic dishes. Witness the journey of a culinary legend in the heart of Tanglin Halt.',
  },
  {
    video: 'https://www.youtube.com/embed/-ZscZv-IMyI?si=mbtS3u96pGHZlW7J',
    title: 'A Peace Of You',
    des: 'Experience a narrative of childhood, growth, friendship, and community. Join us as we unveil the bonds that shaped lives within the vibrant tapestry of Tanglin Halt.',
  },
  {
    video: 'https://www.youtube.com/embed/4eIDBV4Mpek?si=gDosSmltytNHcr0x',
    title: 'Entangled',
    des: 'Immerse yourself in a story of resilience, racial harmony, and service. Discover the nostalgia of a neighbourhood haunt that embodies the collective memories of Tanglin Halt.',
  },
];

export default VideoSection;
