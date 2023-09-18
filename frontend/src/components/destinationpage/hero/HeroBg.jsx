import '../../../css/header.css';
import Link from '../../Link.jsx';
const HeroBg = ({ destination }) => {
  return (
    <div
      className="w-full flex justify-center xl:justify-start items-center h-full absolute top-0 left-0 z-[1]"
      style={{
        backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?${destination.slug})`,
      }}
    >
      <div className="z-10 xl:mx-36 w-full max-w-2xl flex flex-col p-4 justify-center xl:items-start items-center gap-2">
        <h1 className="font-bold xl:text-4xl xl:my-5 text-white-col text-2xl">
          {destination.title}
        </h1>
        <p className="text-base text-white-col xl:text-left xl:text-lg text-center">
          {destination.description}
        </p>
        <Link
          path={`destinations/${destination.path}`}
          text={`Detail`}
          className={
            'bg-violet-400 text-white-col transition-all ease-in-out duration-500 text-lg xl:text-2xl hover:font-bold px-4 m-5 xl:my-5 xl:mx-0 rounded-xl py-1'
          }
        />
      </div>
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      ></div>
    </div>
  );
};

export default HeroBg;
