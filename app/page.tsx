import VideoSection from './components/Home/VideoSection';
import AlumniCard from './components/Home/Cards/AlumniCard';
import Hero from './components/Home/Hero';
import Alumni from './components/Home/Alumni';
import SectionCard from './components/Home/SectionCard';

export default function Home() {
  return (
    <>
      <Hero />
      {sectionsData.map((item, index) => {
        return (
          <SectionCard
            key={index}
            img={item.image}
            title={item.title}
            des={item.subTitle}
            secIndex={index + 1}
          />
        );
      })}
      <VideoSection />
      <Alumni />
    </>
  );
}

const sectionsData = [
  {
    image: '/assets/sec1.png',
    title: 'Unearthing Human Stories',
    subTitle: [
      "Beyond the bricks and mortar lie the heartwarming stories of Tanglin Halt's residents. These short films delve into the lives of individuals and families who weathered tumultuous times, triumphed over adversities, and progressed alongside the evolving landscape of Singapore.",
    ],
  },
  {
    image: '/assets/sec3.webp',
    title: 'Before Memories Fade',
    subTitle: [
      'As progress comes full circle, the iconic flats of Tanglin Halt are making way for redevelopment. We want to immortalise the stories and spirit of the people who called this neighbourhood home before they dissipate into the annals of history.',
    ],
  },
  {
    image: '/assets/sec2.jpeg',
    title: 'The Honour Film Initiative',
    subTitle: [
      'The Tanglin Halt series is an integral part of our mission to empower young, emerging filmmakers in bringing untold stories to life.',
      'The Honour Film Initiative enables emerging filmmakers to tell stories that otherwise may never get told. Stories of honour in its various dimensions: Integrity, respect, resilience, thrift and hard work.',
      'Selected short films are presented at the Honour Film Screening twice a year to honour the hidden, unsung heroes in our midst who embody the value of honour.',
    ],
  },
];
