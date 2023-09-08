import Header from '../Header';
import HomepageMapHeader from './HomepageMapHeader';
import HomepageMapContent from './HomepageMapContent';
import destinations from '../../data/destination/destination.json';

const HomepageMap = () => {
  return (
    <div className="w-full flex py-14 px-8 justify-center dark:bg-black-darkmode items-center">
      <div className="w-full max-w-7xl">
        <HomepageMapHeader />
        <HomepageMapContent destinations={destinations} />
      </div>
    </div>
  );
};

export default HomepageMap;