import Link from "next/link";

interface Component{
    title: string;
    link: string;
    description: string;
}

export default function Card({title , link, description}: Component){
    return(
        <div className="bg-gray-800 text-white p-8 rounded-xl shadow-xl mb-8 my-auto">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                    {title}
                </h3>
                <p className="text-gray-300 mb-4">
                    {description}
                </p>
                <Link href={link} target="_blank" className="inline-block text-blue-400 font-semibold hover:text-blue-300 transition duration-300">
                    View Project &rarr;
                </Link>
            </div>
    )
}