import Navbar from '../components/navbar/Navbar.jsx';
import Hero from '../components/hero/Hero.jsx';
import Category from '../components/category/Category.jsx';
import PopularSearch from '../components/popular-search/PopularSearch.jsx';
import Destination from '../components/destination/Destination.jsx';
import HomepageMap from '../components/map/HomepageMap.jsx';
import Footer from '../components/footer/Footer.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Category />
      <HomepageMap />
      <Footer />
    </>
  );
};

export default Home;
