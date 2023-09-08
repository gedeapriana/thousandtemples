import DestinationHeader from './DestinationHeader.jsx';
import data from '../../data/destination/destination.json';
import DestinationContent from './DestinationContent.jsx';
import bgLight from '../../assets/images/mesh.png';
import bgDark from '../../assets/images/dark-mesh.png';
import { useLayoutEffect, useState } from 'react';
import Link from '../Link.jsx';
import DestinationFooter from './DestinationFooter.jsx';

const Destination = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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
          <DestinationContent data={data.slice(0, 8)} />
        ) : (
          <DestinationContent data={data.slice(0, 3)} />
        )}
        <DestinationFooter text={'More Destinations'} path={'/destinations'} />
      </div>
    </div>
  );
};

export default Destination;
