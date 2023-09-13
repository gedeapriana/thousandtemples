import axios from 'axios';
import bgImage from '../../assets/images/leaf.jpg';
import CategoryHeader from './CategoryHeader.jsx';
import CategoryContent from './CategoryContent.jsx';
import { useEffect, useRef, useState } from 'react';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const categoryContainerRef = useRef(null);
  const handleScrollOnClick = (direction) => {
    const container = categoryContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      const currentScrollLeft = container.scrollLeft;

      if (direction === 'left') {
        container.scrollTo({
          left: currentScrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      } else if (direction === 'right') {
        container.scrollTo({
          left: currentScrollLeft + scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/categories`)
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div
      className="w-full overflow-hidden flex py-8 flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full p-5 flex flex-col justify-center items-center gap-10 z-10">
        <CategoryHeader
          addClass="max-w-7xl"
          handleScroll={handleScrollOnClick}
        />
        <CategoryContent
          addClass="w-full"
          data={categories}
          categoryRef={categoryContainerRef}
        />
      </div>
      <div
        className="absolute w-full h-full top-0 left-0 z-1"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      ></div>
    </div>
  );
};

export default Category;
