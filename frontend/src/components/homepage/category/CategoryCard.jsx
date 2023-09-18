import categoryImage from '../../../assets/images/temp-categories.webp';

const CategoryCard = ({ title, slug }) => {
  return (
    <a
      href={`categories/${slug}`}
      className="flex flex-col justify-center items-center gap-2"
    >
      <div
        className="w-40 h-40 lg:w-48 lg:h-48 drop-shadow-2xl rounded-t-full bg-cover"
        style={{
          backgroundImage: `url(${categoryImage})`,
        }}
      ></div>
      <p style={{ fontWeight: 600 }} className="text-white-col">
        {title}
      </p>
    </a>
  );
};

export default CategoryCard;
