import Image from "next/image"

export default function Home(){
  return(
      <section id="hero" className="text-center py-20 bg-linear-to-r from-blue-50 to-indigo-100 rounded-xl shadow-2xl mb-16 px-6 flex flex-col items-center">
            <div className="flex justify-center mb-6">
                <Image src="/IMG-20251006-WA0172.jpg" 
                     alt="Thomas Manong'a Profile Photo Placeholder"
                     className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl" 
                     width={100} height={100}/>
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-3">Thomas J. Manong&apos;a</h1>
            <p className="text-xl text-blue-600 font-semibold mb-6">Information Technology Student | Software Engineer</p>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Hello, There I am Thomas Manong&apos;a I&apos;m an IT student who enjoys and is considering majoring in software engineering and Cybersecurity. I enjoy working with technologies like JavaScript, React, Node.js, and MongoDB, and I&apos;m always exploring ways to build projects that blend functionality, creativity, and design. When I&apos;m not coding, you&apos;ll probably find me watching anime, playing games especially Call of Duty Mobile and Minecraft, or experimenting with new tech concepts. I&apos;m currently focused on developing projects that showcase both my technical problem-solving and design sense such as dynamic web apps with functional backends. <br /> I&apos;m driven by curiosity, ego, continuous learning, and the challenge of bringing imaginative ideas to life through code.
            </p>
            <div className="mt-8">
                <a href="#contact" className="inline-block md:block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg my-4">Get in Touch</a>
                <a href="https://github.com/loki47z" target="_blank" className="inline-block md:block mt-4 bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300 shadow-lg">View GitHub</a>
            </div>
    </section>
  )
}