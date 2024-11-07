import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[92vh] w-full">
      {/* Image de fond */}
      <Image
        src="/images/hero.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Texte au centre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-white text-3xl md:text-5xl font-k2d font-bold tracking-wide mb-4">
          CRÉATIVITÉ, FONCTIONNALITÉ, ET INNOVATION EN HARMONIE.
        </h1>
        <a href="#" className="text-white text-sm md:text-lg font-k2d font-normal flex items-center cursor-pointer space-x-2  hover:space-x-4 transition-all duration-1000">
          <span>Découvrir nos projets</span>
          <Image src={"/icons/arrow_white.svg"} alt="Arrow" width={30} height={30} className="text-white" />
        </a>
      </div>

      {/* Overlay sombre pour l'image de fond */}
      {/* <div className="absolute inset-0 bg-black opacity-50 z-5"></div> */}
    </div>
  );
};

export default Hero;
