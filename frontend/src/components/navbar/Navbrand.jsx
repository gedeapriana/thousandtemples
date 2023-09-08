import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import Link from '../Link.jsx';

const Navbrand = ({ data }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <RocketLaunchIcon className="w-5 h-5 text-black-col dark:text-white-darkmode" />
      <Link
        path={data.path}
        text={import.meta.env.VITE_APP}
        className={'text-black-col font-bold text-xl dark:text-white-darkmode'}
      />
    </div>
  );
};

export default Navbrand;
