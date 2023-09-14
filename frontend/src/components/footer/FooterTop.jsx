import {
  RocketLaunchIcon,
  Square3Stack3DIcon,
  BellAlertIcon,
  CursorArrowRaysIcon,
} from '@heroicons/react/24/outline';
import Link from '../Link.jsx';
import '../../css/header.css';

const FooterTop = ({ data }) => {
  return (
    <div className="w-full flex gap-5 flex-col lg:flex-row p-8 lg:p-16">
      <div className="w-full lg:w-8/12">
        <h1 className="text-lg gradientText flex dark:text-white-darkmode lg:text-xl justify-start gap-2 items-center my-2 text-black-col font-bold">
          <RocketLaunchIcon className="w-5 h-5" />
          thousandtemples
          <span className="hidden lg:inline">
            : Your Guide to the Best of Bali
          </span>
        </h1>
        <p className="text-sm text-black-col lg:text-base dark:text-white-darkmode my-8 w-full max-w-2xl">
          This headline is short, catchy, and informative. It accurately
          reflects the content of the website, which is a guide to the best of
          Bali. It also uses the word "thousand" to evoke the image of Bali's
          many temples, which are one of the island's most popular tourist
          attractions.
        </p>
      </div>

      <div className="w-full lg:w-4/12 lg:gap-10 flex justify-center items-start">
        <div className="w-1/2 sm:w-4/12">
          <h1 className="text-lg flex lg:text-xl dark:text-white-darkmode justify-start gap-2 items-center my-2 text-black-col font-bold">
            <Square3Stack3DIcon className="w-5 h-5" />
            Menu
          </h1>
          <div className="flex flex-col gap-2">
            {data.navigations.map((navigation, index) => {
              return (
                <Link
                  key={index}
                  path={navigation.path}
                  text={navigation.title}
                  className={
                    'text-sm lg:text-base dark:text-white-darkmode hover:font-semibold'
                  }
                />
              );
            })}
          </div>
        </div>

        <div className="w-1/2 sm:w-4/12">
          <h1 className="text-lg flex justify-start dark:text-white-darkmode gap-2 items-center my-2 text-black-col font-bold">
            <BellAlertIcon className="w-5 h-5" />
            Others
          </h1>
          <div className="flex flex-col gap-2">
            {data.others.map((navigation, index) => {
              return (
                <Link
                  key={index}
                  path={navigation.path}
                  text={navigation.title}
                  className={
                    'text-sm lg:text-base dark:text-white-darkmode hover:font-semibold'
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="w-4/12 hidden sm:block">
          <h1 className="text-lg flex justify-start dark:text-white-darkmode gap-2 items-center my-2 text-black-col font-bold">
            <CursorArrowRaysIcon className="w-5 h-5" />
            Follow Us
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 justify-start items-center">
              <svg
                fill="#7a7a7a"
                width="24px"
                height="24px"
                viewBox="0 0 256.00 256.00"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#7a7a7a"
                strokeWidth="0.00256"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="3.5840000000000005"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g opacity="0.2">
                    {' '}
                    <path d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z"></path>{' '}
                  </g>{' '}
                  <g>
                    {' '}
                    <path d="M128,80a48,48,0,1,0,48,48A48.05436,48.05436,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32.03667,32.03667,0,0,1,128,160Z"></path>{' '}
                    <path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28Zm40,144a40.04521,40.04521,0,0,1-40,40H84a40.04521,40.04521,0,0,1-40-40V84A40.04521,40.04521,0,0,1,84,44h88a40.04521,40.04521,0,0,1,40,40Z"></path>{' '}
                    <circle cx="180" cy="76" r="12"></circle>{' '}
                  </g>{' '}
                </g>
              </svg>{' '}
              <Link
                text={'@thousandtemples'}
                path={'https://instagram.com/thousandtemples'}
                className={
                  'text-sm lg:text-base dark:text-white-darkmode hover:font-semibold'
                }
              />
            </div>

            <div className="flex gap-1 justify-start items-center">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.197 9.197 0 0 0 23 5.121a9.15 9.15 0 0 1-2.597.713 4.542 4.542 0 0 0 1.99-2.5 8.98 8.98 0 0 1-2.87 1.091A4.506 4.506 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03-3.75-.185-7.078-1.99-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03 4.566 4.566 0 0 1-2.043-.563v.061A4.524 4.524 0 0 0 5.5 13.784a4.399 4.399 0 0 1-1.189.159c-.29 0-.572-.027-.845-.08a4.514 4.514 0 0 0 4.217 3.135 9.054 9.054 0 0 1-5.608 1.936A8.69 8.69 0 0 1 1 18.873a12.841 12.841 0 0 0 6.91 2.016Z"
                    fill="#7a7a7a"
                    fillOpacity=".16"
                    stroke="#7a7a7a"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <Link
                text={'@thousandtemples'}
                path={'https://twitter.com/thousandtemples'}
                className={
                  'text-sm lg:text-base dark:text-white-darkmode hover:font-semibold'
                }
              />
            </div>
            <div className="flex gap-1 justify-start items-center">
              <svg
                fill="#7a7a7a"
                width="24px"
                height="24px"
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#7a7a7a"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g opacity="0.2">
                    {' '}
                    <circle cx="128" cy="128" r="96"></circle>{' '}
                  </g>{' '}
                  <path d="M232,128A104,104,0,1,0,127.97412,231.99951L128,232.001l.02588-.00147A104.11733,104.11733,0,0,0,232,128Zm-96,87.63232V152.001h24a8,8,0,0,0,0-16H136v-24a16.01833,16.01833,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32.03667,32.03667,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63134a88,88,0,1,1,16,0Z"></path>{' '}
                </g>
              </svg>
              <Link
                text={'@thousandtemples'}
                path={'https://facebook.com/thousandtemples'}
                className={
                  'text-sm lg:text-base dark:text-white-darkmode hover:font-semibold'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
