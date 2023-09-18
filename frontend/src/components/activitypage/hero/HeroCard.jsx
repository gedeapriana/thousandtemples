import ActivityCard from './ActivityCard.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroCard = ({ activities, setActiveHero }) => {
  return (
    <div className="absolute p-3 rounded-2xl w-3/4 sm:w-2/3 lg:w-2/4 overflow-hidden m-10 lg:block bottom-0 xl:bottom-auto xl:right-0 z-[3]">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 2 },
          586: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1280: { slidesPerView: 2 },
          1536: { slidesPerView: 3 },
        }}
        spaceBetween={10}
        style={{ borderRadius: '20px' }}
      >
        {activities.map((destination, index) => {
          return (
            <SwiperSlide>
              <ActivityCard
                activity={destination}
                setActiveHero={setActiveHero}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroCard;
