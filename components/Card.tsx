interface Component{
    title: string;
    link: string;
    description: string;
}

export default function Card({title , link, description}: Component){
    return(
        <div className="project-card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <a href={link} target="_blank" className="card-link">View Project &rarr;</a>
            </div>
        </div>
    )
}