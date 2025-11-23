import HobbyCard from "@/components/HobbyCard";

export default function Hobbies(){
    const hobbiesData = [
        {
            title: 'Minecraft',
            description: 'Exploring vast worlds, building intricate structures, and collaborating with friends in this sandbox game fuels my creativity and problem-solving skills.',
            theme: 'bg-red-50 text-gray-900 border-3 border-red-700 shadow-red-900/50',
            image: '/minecraft.png',
        },
        {
            title: 'Call of Duty Mobile',
            description: 'Engaging in fast-paced multiplayer battles sharpens my strategic thinking and teamwork abilities while providing an adrenaline rush.',
            theme: 'bg-gray-700 text-yellow-300 border-3 border-yellow-500 shadow-yellow-800/50',
            image: '/CODM.png',
        },
        {
            title: 'Formula 1',
            description: 'Following the high-speed world of F1 racing combines my love for technology and competition, inspiring me with cutting-edge engineering and thrilling races.',
            theme: 'bg-black text-white border-3 border-red-600 shadow-red-900/50',
            image: '/F1.svg',
        },
        {
            title: 'English Premier League',
            description: 'Watching the EPL fuels my passion for football, where I appreciate the skill, strategy, and excitement of the game while supporting my favorite teams.',
            theme: 'bg-purple-50 text-gray-900 border-3 border-green-700 shadow-green-900/50',
            image: '/premier-league.svg',
        },
        {
            title: 'Naruto Series',
            description: 'Immersing myself in the world of Naruto inspires me with its themes of perseverance, friendship, and growth, while enjoying its captivating storylines and characters.',
            theme: 'bg-yellow-50 text-gray-900 border-3 border-orange-700 shadow-orange-900/50',
            image: '/Naruto_logo.svg',
        },
        {
            title: 'Board Games',
            description: 'Engaging in board games enhances my strategic thinking and social skills, providing a fun way to connect with friends and family over friendly competition.',
            theme: 'bg-green-50 text-gray-900 border-3 border-blue-700 shadow-blue-900/50',
            image: '/chess.png',
        }
    ]
    return(
        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-extrabold mb-10 section-header">Hobbies</h2>
            <p className="text-1xl max-w-3xl mx-auto ml-0 mb-12 text-gray-600">
                When I&apos;m not coding, I apply the same principles of strategic thinking, complex system analysis, and persistent iteration to my favorite hobbies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hobbiesData.map((hobby, index) =>(
                    <HobbyCard 
                        key={index}
                        title={hobby.title}
                        description={hobby.description}
                        image={hobby.image}
                        themeClass={hobby.theme}
                    />
                ))}
            </div>
        </div>
    )
}

