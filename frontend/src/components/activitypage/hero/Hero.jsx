import axios from 'axios';
import { useEffect, useState } from 'react';
import HeroBg from './HeroBg';
import HeroCard from './HeroCard';

const Hero = () => {
  const [topActivityByView, setTopActivityByView] = useState([]);
  const [topActivityByLike, setTopActivityByLike] = useState([]);
  const [activeHero, setActiveHero] = useState({});

  console.log(activeHero);

  useEffect(() => {
    axios
      .get('http://localhost:3000/activities')
      .then(res => {
        const activities = res.data;
        const activitiesView = activities
          .sort((a, b) => b.viewCount - a.viewCount)
          .slice(0, 10);
        const activitiesLike = activities
          .sort((a, b) => a.likeCount - b.likeCount)
          .slice(0, 10);
        setTopActivityByView(activitiesView);
        setTopActivityByLike(activitiesLike);
        setActiveHero(activitiesView[0]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="w-full h-screen bg-white-col dark:bg-black-darkmode p-3 pt-24">
      <div className="w-full h-full gap-5 p-5 flex justify-center items-center flex-col bg-cover bg-top relative rounded-xl overflow-hidden">
        <HeroCard
          activities={topActivityByView}
          setActiveHero={setActiveHero}
        />

        <HeroBg activity={activeHero} />
      </div>
    </main>
  );
};

export default Hero;
