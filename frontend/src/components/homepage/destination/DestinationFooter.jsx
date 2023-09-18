import { Link } from 'react-router-dom';

const DestinationFooter = ({ ...data }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <a
        href={data.path}
        className="bg-violet-500 text-white-col px-3 py-2 rounded-xl m-12 hover:scale-105"
        style={{ fontWeight: 600 }}
      >
        {data.text}
      </a>
    </div>
  );
};

export default DestinationFooter;
