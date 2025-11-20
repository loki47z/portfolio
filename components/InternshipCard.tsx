interface InternshipCardProps{
    title: string, 
    position: string, 
    duration: string, 
    responsibilities: string[]
}

export default function InternshipCard({title, position, duration, responsibilities}: InternshipCardProps){
    return(
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-400 my-10">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <p className="text-lg font-semibold text-gray-700">{position}</p>
            <p className="text-sm text-gray-500 mb-3">{duration}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
                {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    )
}