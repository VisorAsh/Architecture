import Image from "next/image";

const About = () => {
  return (
    <div className="flex items-end my-52">
        <div className="w-1/2">
            <Image
                src={"/images/about.png"}
                alt="Arrow"
                width={852}
                height={734}
                className=""
            />
        </div>
        <div className="w-1/2 mx-12 font-k2d pb-28 text-black space-y-8">
            <h2 className="font-semibold text-5xl">À propos</h2>
            <p className="font-medium w-3/4">Architecture est une agence passionnée par la création d’espaces de vie et de travail qui inspirent et répondent aux besoins uniques de chacun. Notre équipe d’architectes et de designers explore l’équilibre parfait entre esthétique et fonctionnalité, en tenant compte de l’environnement et des spécificités de chaque projet. Que ce soit pour des résidences privées, des bâtiments commerciaux ou des espaces publics, notre démarche repose sur l’innovation, le respect de l’environnement et une compréhension approfondie des attentes de nos clients.</p>
        </div>
    </div>
  )
}

export default About;
