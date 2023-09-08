import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  GlobeAsiaAustraliaIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline/index.js';

const HamburgerOption = ({ data, show, setShow, dark, setDark }) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-start gap-4 p-5 rounded-l-2xl shadow-xl max-w-lg h-screen bg-white-col dark:bg-black-darkmode absolute top-0 ${
        show ? 'right-0' : 'right-[-800px]'
      }`}
    >
      <div className="w-full flex justify-end">
        <XMarkIcon
          onClick={() => {
            setShow(!show);
          }}
          className="w-7 h-7 text-black-col dark:text-white-darkmode cursor-pointer"
        />
      </div>

      <ul className="flex justify-center gap-4 items-center">
        {data.navigations.map((navigation, index) => {
          return (
            <li key={index}>
              <a
                href={navigation.path}
                className="font-semibold text-black-col dark:text-white-darkmode"
              >
                {navigation.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center items-center gap-3">
        <div
          className=""
          onClick={() => {
            setDark(!dark);
          }}
        >
          {!dark ? (
            <SunIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900 hidden md:inline" />
          ) : (
            <MoonIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900 hidden md:inline" />
          )}
        </div>
        <GlobeAsiaAustraliaIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900" />
        <MagnifyingGlassIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900" />
        <HeartIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900" />
      </div>
    </div>
  );
};

export default HamburgerOption;
