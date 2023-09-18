import Header from '../../Header.jsx';

const DestinationHeader = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-8">
      <Header
        text={'Top Destinations For You'}
        addClass="m-8 text-center dark:text-white-darkmode"
      />
      <p
        className="text-black-col dark:text-white-darkmode text-center text-sm md:text-base w-full max-w-md"
        style={{ fontWeight: 600 }}
      >
        Much places suits your mood, Explore somewhere interesting and enjoy the
        vibes
      </p>
    </div>
  );
};

export default DestinationHeader;
