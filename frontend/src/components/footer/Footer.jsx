import data from '../../data/navbar/nav.json';
import FooterBottom from './FooterBottom.jsx';
import FooterTop from './FooterTop.jsx';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center">
      <div className="w-full max-w-7xl flex flex-col">
        {/*Top*/}
        <FooterTop data={data} />
        {/*  Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
