import data from '../../data/popular-search/popular-search.json';
import Link from '../Link.jsx';
import Header from '../Header.jsx';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const PopularSearch = () => {
  return (
    <div className="w-full flex justify-center dark:bg-black-darkmode py-12 lg:py-24 items-center bg-white-col">
      <div className="w-full max-w-7xl flex justify-center items-center flex-col p-4">
        <header className="w-full">
          <Header
            text="Popular Search"
            addClass="text-black-col py-4 dark:text-white-darkmode text-center"
          />
        </header>

        <main className="w-11/12 lg:w-9/12 flex justify-center gap-2 md:gap-4 items-center flex-wrap">
          {data.map((popular, index) => {
            return (
              <div
                key={index}
                className="__popular-search-item  text-sm flex justify-center items-center gap-2 lg:text-base border-black-col dark:text-white-darkmode text-black-col border-2 hover:bg-violet-500 hover:border-none hover:text-white-col py-1 px-2 lg:py-2 lg:px-4 rounded-xl"
              >
                <MagnifyingGlassIcon className="w-4 h-4 xl:w-5 xl:h-5" />
                <Link
                  key={index}
                  text={popular.title}
                  path={`search/${popular.path}`}
                  className=""
                  style={{ fontWeight: 600 }}
                />
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default PopularSearch;
