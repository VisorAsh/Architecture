import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

const Service = () => {
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-28">
            {/* Section principale avec image de fond et texte */}
            <div className="relative w-full md:w-1/2 h-[700px]">
                {/* Image de fond */}
                <Image
                    src="/images/service.png"
                    alt="Service Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="absolute inset-0"
                />

                {/* Contenu textuel au centre */}
                <div className="absolute inset-0 flex flex-col justify-between text-center text-white p-6 z-10 space-y-4">
                    <div className="space-y-20">
                        {/* Icone SVG */}
                        <svg
                            width="67"
                            height="67"
                            viewBox="0 0 67 67"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M60.7188 33.5H50.25V25.125C50.25 20.5057 54.0057 16.75 58.625 16.75H59.6719C61.4123 16.75 62.8125 15.3498 62.8125 13.6094V7.32812C62.8125 5.5877 61.4123 4.1875 59.6719 4.1875H58.625C47.057 4.1875 37.6875 13.557 37.6875 25.125V56.5312C37.6875 59.999 40.501 62.8125 43.9688 62.8125H60.7188C64.1865 62.8125 67 59.999 67 56.5312V39.7812C67 36.3135 64.1865 33.5 60.7188 33.5ZM23.0312 33.5H12.5625V25.125C12.5625 20.5057 16.3182 16.75 20.9375 16.75H21.9844C23.7248 16.75 25.125 15.3498 25.125 13.6094V7.32812C25.125 5.5877 23.7248 4.1875 21.9844 4.1875H20.9375C9.36953 4.1875 0 13.557 0 25.125V56.5312C0 59.999 2.81348 62.8125 6.28125 62.8125H23.0312C26.499 62.8125 29.3125 59.999 29.3125 56.5312V39.7812C29.3125 36.3135 26.499 33.5 23.0312 33.5Z"
                                fill="white"
                            />
                        </svg>

                        <div className="space-y-12">
                            {/* Titre */}
                            <h4 className="uppercase font-k2d font-semibold text-4xl text-left">
                                Conception architecturale
                            </h4>

                            {/* Description */}
                            <p className="font-k2d text-lg font-normal max-w-lg text-left">
                                Nous transformons vos idées en plans détaillés et visuels pour créer
                                des espaces à la fois fonctionnels et esthétiques, pensés pour répondre
                                à toutes vos exigences.
                            </p>
                        </div>
                    </div>

                    {/* Bouton */}
                    <div className="flex items-center justify-end space-x-2 cursor-pointer group">
                        <span className="uppercase font-k2d font-medium">Voir Plus</span>
                        <Image
                            src="/icons/arrow_white.svg"
                            alt="Arrow"
                            width={30}
                            height={30}
                            className="transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>

            {/* Section secondaire en grille */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="relative w-full h-full">
                    <Image
                        src="/images/service_image.png"
                        alt="Service Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className=""
                    />
                </div>
                {/* Card 2 */}
                <ServiceCard
                    serviceName={"Gestion de projet"}
                    serviceDescription={"De l’élaboration du concept jusqu’à la finalisation, nous coordonnons chaque étape pour assurer la qualité et le respect des délais."}
                />
                {/* Card 3 */}
                <ServiceCard
                    serviceName={"Suivi de chantier"}
                    serviceDescription={"Notre équipe supervise chaque aspect du chantier, en veillant au respect des plans et du  calendrier."}
                />

                {/* Card 4 */}
                <ServiceCard
                    serviceName={"Consultation en développement durable"}
                    serviceDescription={" Nous offrons des services de conseil pour optimiser l’efficacité énergétique et minimiser l’impact écologique."}
                />

            </div>
        </div>
    );
};

export default Service;
