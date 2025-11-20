import Link from "next/link";
export default function About(){
    return(
        <section id="about" className="py-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header">About Me</h2>
            <div className="grid md:grid-cols-3 gap-10 items-start">
                <div className="md:col-span-2 space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        I am an 18-year-old dedicated student currently pursuing a Bachelor of Science in Information Technology at the Malawi University of Business and Applied Science. My academic foundation is built on a strong curriculum, covering areas from foundational programming (C++) and networking to modern web development technologies (HTML, CSS, JavaScript, Node.js) and database technologies.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        My passion lies in practical application, as demonstrated by my web development projects available on my <Link href={'/projects'}>Github</Link>. I am a fast learner, adaptable, and possess strong problem-solving and teamwork skills, always ready to take on project work and challenges.
                    </p>
                </div>
                <div className="md:col-span-1 bg-gray-50 p-6 rounded-xl shadow-inner">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Facts</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li><strong>Location:</strong> Lilongwe, Malawi</li>
                        <li><strong>Education:</strong> BSc IT (Studying)</li>
                        <li><strong>Age:</strong> 18 (Date of birth: 24th Nov 2006)</li>
                        <li><strong>Hobbies: </strong>Anime, Sitcoms, Games, Board Games</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}