import Navbar from '../components/navbar/Navbar.jsx';
import Hero from '../components/homepage/hero/Hero.jsx';
import Category from '../components/homepage/category/Category.jsx';
import PopularSearch from '../components/homepage/popular-search/PopularSearch.jsx';
import Destination from '../components/homepage/destination/Destination.jsx';
import HomepageMap from '../components/homepage/map/HomepageMap.jsx';
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
