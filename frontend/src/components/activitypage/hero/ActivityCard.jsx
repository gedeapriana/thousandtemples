import { EyeIcon } from '@heroicons/react/24/outline';
import '../../../css/destinationpage/gradient.css';

const ActivityCard = ({ activity, setActiveHero }) => {
  return (
    <div
      onClick={() => {
        setActiveHero(activity);
      }}
      className="h-[200px] relative flex justify-start items-end overflow-hidden cursor-pointer rounded-2xl xl:h-[500px] w-32 xl:w-72 bg-cover"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/1920x1080/?${activity.slug}")`,
      }}
    >
      <div className="z-10 w-full flex justify-center items-center m-3 xl:m-8">
        <h1 className="font-bold flex-grow text-white-col text-sm xl:text-xl">
          {activity.title}
        </h1>
        <div className="flex justify-center items-center">
          <EyeIcon className="w-6 h-6 text-white-col" />
          <span className="text-white-col">{activity.viewCount}</span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full gradientBg"></div>
    </div>
  );
};

export default ActivityCard;
