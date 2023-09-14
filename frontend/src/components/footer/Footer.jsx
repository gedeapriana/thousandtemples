import data from '../../data/navbar/nav.json';
import FooterBottom from './FooterBottom.jsx';
import FooterTop from './FooterTop.jsx';

const Footer = () => {
  return (
    <footer className="w-full bg-white-col dark:border-neutral-800 dark:bg-black-darkmode border-t flex justify-center items-center">
      <div className="w-full gap-8 flex flex-col">
        {/*Top*/}
        <FooterTop data={data} />
        {/*  Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
