import Header from '../Header';

const HomepageMapHeader = () => {
  return (
    <div className="my-8 lg:my-12">
      <Header
        text={'Map of Bali'}
        addClass={'text-black-col dark:text-white-darkmode'}
      />
      <p
        className="text-black-col text-sm md:text-base w-full max-w-xl dark:text-white-darkmode"
        style={{ fontWeight: 600 }}
      >
        Are you lost? We have a map of the island of Bali.
      </p>
    </div>
  );
};

export default HomepageMapHeader;
