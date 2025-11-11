import Card from "@/components/Card";

export default function About(){
    const projectLink = [
        {title: 'Anime Tracker', link: 'https://github.com/loki47z/Anime-Tracker', description: 'It helps you keep track of your watched and unwatched anime'},
        {title: 'Memory Game', link: 'https://github.com/loki47z/Memory-Game', description: 'A simple F1 themed Javascript game to test your memory'}
    ]
    return(
        <>
            <section className="projects-grid-section">
                <h1 className="projects-heading">My Latest Projects</h1>
                <div className="project-grid">
                    {projectLink.map(project=>(
                        <Card title={project.title} key={project.title} link={project.link} description={project.description}/>
                    ))}
                </div>
            </section>
        </>
    )

}