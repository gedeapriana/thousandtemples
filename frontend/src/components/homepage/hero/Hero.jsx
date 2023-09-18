import heroImageBg from '../../../assets/images/temple.jpg';
import PopularSearch from '../popular-search/PopularSearch.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';
import SearchBox from './SearchBox.jsx';

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const bgRef = useRef(null);
  useEffect(() => {
    gsap.from(bgRef.current, {
      opacity: 1,
    });
    gsap.to(bgRef.current, {
      scrollTrigger: {
        scrub: 1,
      },
      opacity: 0.5,
      y: 300,
    });
  });

  return (
    <main className="w-full h-screen bg-white-col dark:bg-black-darkmode p-3 pt-24">
      <div className="w-full h-full gap-5 p-5 flex justify-center items-center flex-col bg-cover bg-top relative rounded-xl overflow-hidden">
        <SearchBox />
        <PopularSearch />
        <img
          ref={bgRef}
          src={heroImageBg}
          alt=""
          className="w-full absolute h-full brightness-50 object-cover"
        />
      </div>
    </main>
  );
};

export default Hero;
