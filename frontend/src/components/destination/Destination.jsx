import DestinationHeader from './DestinationHeader.jsx';
import axios from 'axios';
import DestinationContent from './DestinationContent.jsx';
import bgLight from '../../assets/images/mesh.png';
import bgDark from '../../assets/images/dark-mesh.png';
import { useEffect, useLayoutEffect, useState } from 'react';
import DestinationFooter from './DestinationFooter.jsx';

const Destination = () => {
  const [size, setSize] = useState([0, 0]);
  const [destinations, setDestinations] = useState([]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/destinations`)
      .then((res) => setDestinations(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div
      style={{
        '--image-light': `url(${bgLight})`,
        '--image-dark': `url(${bgDark})`,
      }}
      className="w-full py-12 px-8 flex bg-center bg-cover justify-center items-center bg-[image:var(--image-light)] dark:bg-[image:var(--image-dark)]"
    >
      <div className="w-full max-w-7xl">
        <DestinationHeader />
        {size[0] >= 640 ? (
          <DestinationContent data={destinations.slice(0, 8)} />
        ) : (
          <DestinationContent data={destinations.slice(0, 3)} />
        )}
        <DestinationFooter text={'More Destinations'} path={'/destinations'} />
      </div>
    </div>
  );
};

export default Destination;
