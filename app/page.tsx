import Image from "next/image"

export default function Home(){
  return(
    <section className="section">
      <div>
        <div>Hello, There <br /> I am Thomas Manong&apos;a</div>
        <div>I&apos;m a passionate IT student and web developer who loves turning creative ideas into interactive digital experiences. I enjoy working with technologies like JavaScript, React, Node.js, and MongoDB, and I&apos;m always exploring ways to build projects that blend functionality, creativity, and design. <br /> When I&apos;m not coding, you&apos;ll probably find me watching anime, playing games, or experimenting with new tech concepts. I&apos;m currently focused on developing projects that showcase both my technical problem-solving and design sense — from dynamic web apps to themed portfolio sites inspired by my favorite worlds like Naruto. <br /> I&apos;m driven by curiosity, continuous learning, and the challenge of bringing imaginative ideas to life through code.</div>
      </div>
      <div>
        <Image src='/img.jpg' width={290} height={520} alt='profile'></Image>
      </div>
    </section>
  )
}