import Skills from '@/components/Skills';

export default function SkillsPage(){

    const technicalSkills = [
        {name: "HTML & CSS", color: "blue"},
        {name: "JavaScript", color: "blue"},
        {name: "Node.js", color: "blue"},
        {name: "C++ Programming", color: "blue"},
        {name: "MySQL (Database Management)", color: "blue"},
        {name: "Networking (Switching/Routing)", color: "blue"},
        {name: "Arduino Uno", color: "blue"},
        {name: "Data Structures & Algorithms", color: "blue"},
    ];

    const softSkills = [
        {name: "Teamwork", color: "green"},
        {name: "Technical communication"
, color: "green"},
        {name: "Problem-solving", color: "green"},
        {name: "Time management", color: "green"},
        {name: "Adaptability", color: "green"},
        {name: "Attention to detail", color: "green"},
        {name: "Analytical thinking", color: "green"},
        {name: "Troubleshooting mindset", color: "green"},
        {name: "Documentation clarity", color: "green"}
    ]
    return(
        <section id="skills" className="py-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header">Technical & Soft Skills</h2>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-xl">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Technical Proficiency</h3>
                    <div className="flex flex-wrap gap-3">
                        {technicalSkills.map((skill, index) => (
                            <Skills sname={skill.name} color={skill.color} key={index} />
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-xl">
                    <h3 className="text-xl font-semibold text-gray-600 mb-4">Core Competencies (Soft Skills)</h3>
                    <div className="flex flex-wrap gap-3">
                        {softSkills.map((skill, index) => (
                            <Skills key={index} sname={skill.name} color={skill.color} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}