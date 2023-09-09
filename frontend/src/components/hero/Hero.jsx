import heroImageBg from '../../assets/images/temple.jpg';
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";

import {useEffect, useRef} from "react";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const bgRef = useRef(null)
  useEffect(() => {
    gsap.from(bgRef.current, {
      opacity: 1
    })
    gsap.to(bgRef.current, {
      scrollTrigger: {
        scrub: 1
      },
      opacity: .5,
      y: 300
    })
  })


  return (
    <main className="w-full h-screen bg-white-col dark:bg-black-darkmode p-3 pt-24">
      <div
        className="w-full h-full bg-cover bg-top relative rounded-xl overflow-hidden"
      >
        <img ref={bgRef} src={heroImageBg} alt="" className="w-full absolute h-full brightness-50 object-cover"/>
      </div>
    </main>
  );
};

export default Hero;
