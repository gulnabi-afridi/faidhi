import SectionCard from './components/Home/SectionCard';
import VideoSection from './components/Home/VideoSection';
import Image from 'next/image';
import Wrapper from './components/shared/ComponentWrapper/ComponentWrapper';
import AlumniCard from './components/Home/AlumniCard';
import Hero from './components/Home/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      {alumniData.map((item, index) => {
        return <AlumniCard key={index} img={item.img} text={item.text} />;
      })}
    </>
  );
}

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
