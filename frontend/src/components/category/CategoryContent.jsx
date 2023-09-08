import CategoryCard from './CategoryCard.jsx';

const CategoryContent = ({ data, categoryRef }) => {
  return (
    <div
      className="w-full justify-start items-center gap-12 flex overflow-auto"
      style={{ WebkitScrollSnapType: 'none' }}
      ref={categoryRef}
    >
      {data.map((category, index) => {
        return (
          <CategoryCard
            key={index}
            title={category.title}
            slug={category.slug}
          />
        );
      })}
    </div>
  );
};

export default CategoryContent;
