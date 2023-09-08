// import heroImageBg from '../../assets/images/ocean.jpg';
const Hero = () => {
  return (
    <main className="w-full h-screen bg-white-col dark:bg-black-darkmode p-3 pt-24">
      <div
        className="w-full h-full bg-cover rounded-xl bg-violet-500"
        style={{
          // backgroundImage: `url(${heroImageBg})`,
          backgroundPosition: 'center',
        }}
      ></div>
    </main>
  );
};

export default Hero;
