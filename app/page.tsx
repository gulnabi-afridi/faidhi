import Hero from './components/Home/Hero';
import SectionCard from './components/Home/SectionCard';
import VideoSection from './components/Home/VideoSection';

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
  },
  {
    img: '/assets/sec2.jpeg',
    title: 'Before Memories Fade',
    des: 'As progress comes full circle, the iconic flats of Tanglin Halt are making way for redevelopment. We want to immortalise the stories and spirit of the people who called this neighbourhood home before they dissipate into the annals of history.',
  },
  {
    img: '/assets/sec3.png',
    title: 'Before Memories Fade',
    des: ' As progress comes full circle, the iconic flats of Tanglin Halt are making way for redevelopment. We want to immortalise the stories and spirit of the people who called this neighbourhood home before they dissipate into the annals of history.',
  },
];
