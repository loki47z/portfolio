import Image from "next/image";
interface HobbyCardProps{
    title: string;
    description: string;
    image: string;
    themeClass: string;
}

export default function HobbyCard({title, description, image, themeClass}: HobbyCardProps){
    return(
        <div className={`p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center ${themeClass}`}>
            <div className="text-3xl mb-4">
                <Image src={image} alt={`${title} Icon`} width={200} height={200} className="mx-auto"/>
            </div>
            <h3 className="text-2xl font-bold mb-3 border-b-2 pb-2">
                {title}
            </h3>
            <p className="text-lg">
                {description}
            </p>
        </div>
    )
}