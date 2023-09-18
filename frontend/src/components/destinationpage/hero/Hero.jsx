import axios from 'axios';
import { useEffect, useState } from 'react';
import HeroBg from './HeroBg';
import HeroCard from './HeroCard';

const Hero = () => {
  const [topDestinationByView, setTopDestinationByView] = useState([]);
  const [topDestinationByLike, setTopDestinationByLike] = useState([]);
  const [activeHero, setActiveHero] = useState({});

  console.log(activeHero);

  useEffect(() => {
    axios
      .get('http://localhost:3000/destinations')
      .then(res => {
        const destinations = res.data;
        const destinationsView = destinations
          .sort((a, b) => b.viewCount - a.viewCount)
          .slice(0, 10);
        const destinationsLike = destinations
          .sort((a, b) => a.likeCount - b.likeCount)
          .slice(0, 10);
        setTopDestinationByView(destinationsView);
        setTopDestinationByLike(destinationsLike);
        setActiveHero(destinationsView[0]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="w-full h-screen bg-white-col dark:bg-black-darkmode p-3 pt-24">
      <div className="w-full h-full gap-5 p-5 flex justify-center items-center flex-col bg-cover bg-top relative rounded-xl overflow-hidden">
        <HeroCard
          destinations={topDestinationByView}
          setActiveHero={setActiveHero}
        />

        <HeroBg destination={activeHero} />
      </div>
    </main>
  );
};

export default Hero;
