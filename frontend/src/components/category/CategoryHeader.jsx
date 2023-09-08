import Header from '../Header.jsx';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

const CategoryHeader = ({ handleScroll, addClass }) => {
  return (
    <div className={`flex w-full ${addClass}`}>
      <div className="flex flex-1 my-8 justify-center items-center">
        <header className="flex-grow px-5 border-l-2 border-violet-500">
          <Header text="Categories" addClass="text-white-col" />
          <p
            className="text-white-col text-sm md:text-base w-full max-w-xl"
            style={{ fontWeight: 600 }}
          >
            Explore our destinations by category. Whether you are looking for
            adventure, culture, or relaxation, we have something for you.
          </p>
        </header>
        <div className=""></div>
      </div>

      <div className="flex justify-center items-center gap-3">
        <div
          className="cursor-pointer hover:bg-violet-500 rounded-full"
          onClick={() => handleScroll('left')}
        >
          <ArrowLeftCircleIcon className="w-10 h-10 text-white-col" />
        </div>
        <div className="cursor-pointer hover:bg-violet-500 rounded-full">
          <ArrowRightCircleIcon
            className="w-10 h-10 text-white-col"
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
