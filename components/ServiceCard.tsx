import Image from "next/image";

type ServiceCardProps = {
    serviceName: string;
    serviceDescription: string;
}

const ServiceCard = ({serviceName, serviceDescription}: ServiceCardProps) => {
    return (
        <div className="p-4 bg-beige flex flex-col justify-between">
            <div className="space-y-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M36.25 20H30V15C30 12.2422 32.2422 10 35 10H35.625C36.6641 10 37.5 9.16406 37.5 8.125V4.375C37.5 3.33594 36.6641 2.5 35.625 2.5H35C28.0937 2.5 22.5 8.09375 22.5 15V33.75C22.5 35.8203 24.1797 37.5 26.25 37.5H36.25C38.3203 37.5 40 35.8203 40 33.75V23.75C40 21.6797 38.3203 20 36.25 20ZM13.75 20H7.5V15C7.5 12.2422 9.74219 10 12.5 10H13.125C14.1641 10 15 9.16406 15 8.125V4.375C15 3.33594 14.1641 2.5 13.125 2.5H12.5C5.59375 2.5 0 8.09375 0 15V33.75C0 35.8203 1.67969 37.5 3.75 37.5H13.75C15.8203 37.5 17.5 35.8203 17.5 33.75V23.75C17.5 21.6797 15.8203 20 13.75 20Z"
                        fill="black"/>
                </svg>
                <div className="space-y-10">
                    <h4 className="font-k2d font-semibold text-xl text-black uppercase">
                        {serviceName}
                    </h4>
                    <p className="text-sm text-black font-k2d">
                        {serviceDescription}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-end space-x-2 mt-2 cursor-pointer group">
                <span className="uppercase font-k2d text-sm text-black font-medium">Voir Plus</span>
                <Image
                    src="/icons/arrow_black.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
            </div>
        </div>
    )
}

export default ServiceCard;
