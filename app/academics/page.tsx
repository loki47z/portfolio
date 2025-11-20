export default function Academics(){
    return(
        <section id="education" className="py-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header">Academic Journey</h2>

            <div className="bg-white p-8 rounded-xl shadow-xl mb-8 border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-600">Bachelor of Science in Information Technology</h3>
                <p className="text-lg font-semibold text-gray-700">Malawi University of Business and Applied Science</p>
                <p className="text-sm text-gray-500 mb-4">January 2024 - Present (Studying)</p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Modules</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <ul className="space-y-2 p-3 bg-blue-50 rounded-lg">
                        <li className="font-medium text-blue-700">Year 1 Highlights:</li>
                        <li><span className="text-gray-600">Fundamentals in Computer Networking</span></li>
                        <li><span className="text-gray-600">Introduction to Programming (C++)</span></li>
                        <li><span className="text-gray-600">Electric Circuit Fundamentals</span></li>
                    </ul>
                    <ul className="space-y-2 p-3 bg-blue-50 rounded-lg">
                        <li className="font-medium text-blue-700">Year 2 Highlights (Completed):</li>
                        <li><span className="text-gray-600">Web Programming (HTML, CSS, JS, Node.js)</span></li>
                        <li><span className="text-gray-600">Computer Hardware Systems II (Arduino Uno)</span></li>
                        <li><span className="text-gray-600">Interconnecting Networks</span></li>
                    </ul>
                    <ul className="space-y-2 p-3 bg-blue-50 rounded-lg">
                        <li className="font-medium text-blue-700">Current Studies:</li>
                        <li><span className="text-gray-600">Data Structures and Algorithms</span></li>
                        <li><span className="text-gray-600">Database Management Systems (MySQL)</span></li>
                        <li><span className="text-gray-600">Systems Analysis and Design</span></li>
                    </ul>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800">The Malawi School Certificate of Education (MSCE)</h3>
                <p className="text-lg font-semibold text-gray-700">Loyola Jesuit Secondary School</p>
                <p className="text-sm text-gray-500">September 2018 - September 2022</p>
            </div>
        </section>
    )
}