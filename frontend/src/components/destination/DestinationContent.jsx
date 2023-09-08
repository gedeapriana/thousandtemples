import DestinationCard from './DestinationCard.jsx';

const DestinationContent = ({ data }) => {
  return (
    <div className="w-full inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((destination, index) => {
        return <DestinationCard key={index} data={destination} />;
      })}
    </div>
  );
};

export default DestinationContent;
