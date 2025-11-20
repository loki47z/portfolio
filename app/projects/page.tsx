import Card from "@/components/GithubCard";
import InternshipCard from "@/components/InternshipCard";

export default function About(){
    const projectLink = [
        {title: 'Anime Tracker', link: 'https://github.com/loki47z/Anime-Tracker', description: 'It helps you keep track of your watched and unwatched anime'},
        {title: 'Memory Game', link: 'https://github.com/loki47z/Memory-Game', description: 'A simple F1 themed Javascript game to test your memory'}
    ]

    const internshipDetails = [{
        title: "Internship Experience",
        position: "Intern at Kunda Suppliers",
        duration: "August 2023 - January 2024",
        responsibilities: [
            "Assisted in basic network maintenance and troubleshooting.",
            "Gained exposure to business communication skills in a professional setting.",
            "Applied analytical and problem-solving skills to improve operational efficiency."
        ]},
        {
        title: "Internship Experience",
        position: "Intern at HallMark Limited",
        duration: "November 2025 - Present",
        responsibilities: [
            "Collaborated with the IT team to support daily operations.",
            "Participated in the development of internal tools using JavaScript."
        ]}
    ]

    return(
        <>
            <section id="projects" className="py-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header">Projects & Experience</h2>

            {projectLink.map((project) =>(
                <Card 
                    key={project.title}
                    title={project.title}
                    link={project.link}
                    description={project.description}
                />
            ))}
            
            {internshipDetails.map((internship, index) =>(
                <InternshipCard
                    key={index}
                    title={internship.title}
                    position={internship.position}
                    duration={internship.duration}
                    responsibilities={internship.responsibilities}
                />
            ))}
            
        </section>
        </>
    )

}