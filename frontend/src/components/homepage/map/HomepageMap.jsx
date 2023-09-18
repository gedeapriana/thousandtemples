import Header from '../../Header.jsx';
import HomepageMapHeader from './HomepageMapHeader.jsx';
import HomepageMapContent from './HomepageMapContent.jsx';
// import destinations from '../../data/destination/destination.json';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HomepageMap = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/destinations')
      .then((res) => setDestinations(res.data))
      .catch((err) => console.log(err));
  }, []);

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
