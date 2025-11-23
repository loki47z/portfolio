export default function ContactPage(){
    return(
        <section id="contact" className="py-12">
            <h2 className="text-4xl font-bold text-gray-800 section-header">Contact & Referrals</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                
                <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-indigo-500">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let&apos;s Connect</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"/></svg>
                            <a href="mailto:thomasmanonga7@gmail.com" className="hover:underline">thomasmanonga7@gmail.com</a>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            <a href="tel:+265986545056" className="hover:underline">+265 986 545 056</a>
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            <span>Lilongwe, Malawi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}