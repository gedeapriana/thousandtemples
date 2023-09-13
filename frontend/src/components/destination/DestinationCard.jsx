import destinationImage from '../../assets/images/temp-destinations.webp';
import '../../css/destination.css';
import {
  MapPinIcon,
  BanknotesIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const DestinationCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`destinations/${data.slug}`}
      className="border border-slate-100 dark:border-neutral-800 p-3 dark:bg-neutral-900 rounded-3xl flex flex-col justify-start bg-white-col items-stretch"
    >
      <div
        className="h-40 relative rounded-xl bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${destinationImage})`,
        }}
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
      >
        <div
          className={`${hovered ? 'bottom-0' : 'bottom-[-30px]'
            } absolute right-0 m-2 flex gap-2 justify-center items-center z-10`}
          style={{ transition: 'all ease-in-out .3s' }}
        >
          <p className="text-white-col z-0 flex justify-center items-center gap-1 bg-violet-500 px-1 rounded-full text-sm">
            <HeartIcon className="w-3 h-3" />
            {data.likeCount}
          </p>
          <p className="text-white-col flex justify-center items-center gap-1 bg-violet-500 px-1 rounded-full text-sm">
            <HeartIcon className="w-3 h-3" />
            {data.viewCount}
          </p>
        </div>
      </div>
      <div className="">
        <h3 className="text-black-col text-base font-bold mt-3 dark:text-white-darkmode">
          {data.title}
        </h3>

        <p className="text-gray-400 text-xs">{data.category}</p>

        <p className="cutoff-text text-sm text-black-col dark:text-white-darkmode">
          {data.description}
        </p>
        <div className="flex mt-2 justify-stretch gap-2 items-center">
          <div className="flex-1 text-sm flex justify-start items-center">
            <MapPinIcon className="w-4 h-4 inline-block text-violet-500" />
            <p
              className="cutoff-text text-violet-500"
              style={{ fontWeight: 600 }}
            >
              {data.location}
            </p>
          </div>
          <div className="text-sm flex justify-start items-center gap-1">
            <BanknotesIcon className="w-4 h-4 inline-block text-violet-500" />
            <p
              className="cutoff-text text-sm text-violet-500"
              style={{ fontWeight: 600 }}
            >
              {data.price === 0 ? <p>Free</p> : <p>Rp. {data.price}</p>}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DestinationCard;
