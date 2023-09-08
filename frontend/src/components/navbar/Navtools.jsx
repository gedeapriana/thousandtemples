import {
  MagnifyingGlassIcon,
  HeartIcon,
  GlobeAsiaAustraliaIcon,
  SunIcon,
  Bars3BottomRightIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import HamburgerOption from '../hamburger-option/HamburgerOption.jsx';

const Navtools = ({ data }) => {
  const [dark, setDark] = useState(false);
  const [showHamburgerOption, setShowHamburgerOption] = useState(false);

  if (dark) document.querySelector('html').classList.add('dark');
  else document.querySelector('html').classList.remove('dark');

  return (
    <>
      <div className="flex justify-center items-center gap-4">
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
        <GlobeAsiaAustraliaIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900 hidden md:inline" />
        <MagnifyingGlassIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900 hidden md:inline" />
        <HeartIcon className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900 hidden md:inline" />
        <Bars3BottomRightIcon
          onClick={() => {
            setShowHamburgerOption(!showHamburgerOption);
          }}
          className="w-5 h-5 text-black-col dark:text-white-darkmode cursor-pointer hover:text-neutral-900"
        />
      </div>

      <HamburgerOption
        show={showHamburgerOption}
        setShow={setShowHamburgerOption}
        data={data}
        dark={dark}
        setDark={setDark}
      />
    </>
  );
};

export default Navtools;
