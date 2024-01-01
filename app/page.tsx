import Hero from './components/Home/Hero';
import SectionCard from './components/Home/SectionCard';
import VideoSection from './components/Home/VideoSection';
import Image from 'next/image';
import Wrapper from './components/shared/ComponentWrapper/ComponentWrapper';
import AlumniCard from './components/Home/AlumniCard';

export default function Home() {
  return (
    <>
      <Hero />
      {sectionsData.map((item, index) => {
        return (
          <SectionCard
            key={index}
            img={item.img}
            title={item.title}
            des={item.des}
            secIndex={index + 1}
            isRight={item.isRight}
          />
        );
      })}
      {alumniData.map((item, index) => {
        return (
          <AlumniCard
            key={index}
            secIndex={index + 1}
            img={item.img}
            isRight={item.isRight}
            text={item.text}
          />
        );
      })}

      <VideoSection />
    </>
  );
}

const sectionsData = [
  {
    img: '/assets/sec1.png',
    title: 'Unearthing Human Stories',
    des: ' Beyond the bricks and mortar lie the heartwarming stories of Tanglin Halt&apos;s residents. These short films delve into the lives of individuals and families who weathered tumultuous times, triumphed over adversities, and progressed alongside the evolving landscape of Singapore.',
    isRight: true,
  },
  {
    img: '/assets/sec2.jpeg',
    title: 'Before Memories Fade',
    des: 'As progress comes full circle, the iconic flats of Tanglin Halt are making way for redevelopment. We want to immortalise the stories and spirit of the people who called this neighbourhood home before they dissipate into the annals of history.',
    isRight: false,
  },
  {
    img: '/assets/sec3.png',
    title: 'Before Memories Fade',
    des: ' As progress comes full circle, the iconic flats of Tanglin Halt are making way for redevelopment. We want to immortalise the stories and spirit of the people who called this neighbourhood home before they dissipate into the annals of history.',
    isRight: true,
  },
];

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
