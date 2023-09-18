import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBox = () => {
  return (
    <form
      action=""
      className="bg-white-col dark:bg-black-darkmode z-20 flex justify-center items-center gap-4 w-full p-4 rounded-lg mx-4 max-w-md"
    >
      <MagnifyingGlassIcon className="lg:w-6 lg:h-6 w-4 h-4 text-black-col dark:text-white-darkmode" />
      <input
        type="text"
        className="focus:outline-none dark:focus:text-white-darkmode dark:bg-black-darkmode text-xs lg:text-base flex-1"
        placeholder="Search your dream place..."
      />
      <button
        type="submit"
        className="text-sm text-violet-400 lg:text-lg pl-2 text-black-col font-semibold border-l"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
