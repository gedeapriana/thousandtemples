import data from '../../data/navbar/nav.json';
import Navlists from './Navlists.jsx';
import Navbrand from './Navbrand.jsx';
import Navtools from './Navtools.jsx';

const Navbar = () => {
  return (
    <header
      className="w-full fixed bg-white-col dark:bg-black-darkmode"
      style={{ zIndex: 9999 }}
    >
      <nav className="w-full p-8 flex justify-between items-center">
        <Navbrand data={data} />
        <Navlists data={data} />
        <Navtools data={data} />
      </nav>
    </header>
  );
};

export default Navbar;
