import Card from "@/components/GithubCard";
import InternshipCard from "@/components/InternshipCard";

const projectLinks = [
  {
    title: "Anime Tracker",
    subtitle: "Full-Stack Web Application",
    icon: "movie",
    link: "https://github.com/loki47z/Anime-Tracker",
    description:
      "Helps you keep track of your watched and unwatched anime series with episode progress tracking and personal watchlist filtering.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Memory Game",
    subtitle: "Interactive Browser Game",
    icon: "sports_motorsports",
    link: "https://github.com/loki47z/Memory-Game",
    description:
      "A Formula 1-themed JavaScript memory challenge built to test pattern recall, move efficiency, and reaction speed.",
    tags: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "MalawiMarket",
    subtitle: "E-commerce Web Application",
    icon: "shopping_cart",
    link: "https://github.com/loki47z/msih-hackathon",
    description:
      "A web application for buying and selling products in Malawi featuring location based listings and a shopping cart system. Developed during the MSIH Hackathon 2026.",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
  },
  {
    title: "Malapay",
    subtitle: "Mobile Payment Application",
    icon: "payment",
    link: "https://github.com/loki47z/Malapay",
    description:
      "A mobile payment application designed for seamless transactions in Malawi, featuring a user-friendly interface and secure payment processing. Built during the Finnovate Hackathon 2026.",
    tags: ["Frontend: Flutter", "Backend: Next.js 16", "Database: Prisma 6 ORM", "API: The Next.js App"],
  }
];

const internshipDetails = [
  {
    title: "Internship Experience",
    position: "Intern at Kunda Suppliers",
    duration: "Aug 2023 – Jan 2024",
    responsibilities: [
      "Assisted in basic network maintenance and troubleshooting.",
      "Gained exposure to business communication skills in a professional setting.",
      "Applied analytical and problem-solving skills to improve operational efficiency.",
    ],
  },
  {
    title: "Internship Experience",
    position: "Intern at HallMark Limited",
    duration: "Nov 2025 – Present",
    responsibilities: [
      "Collaborated with the IT team to support daily operations.",
      "Participated in the development of internal tools using JavaScript.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="max-w-[1200px] mx-auto px-gutter-lg md:px-page-margin py-section flex flex-col gap-gutter-xl"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter-md">
        <div className="flex flex-col gap-gutter-xs">
          <span className="font-label text-label-md text-light-primary">SELECTED WORK</span>
          <h1 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
            Projects &amp; Experience
          </h1>
        </div>
        <p className="font-body text-body-md text-light-on-surface-variant max-w-md">
          Practical web applications and industry internships that build full-stack engineering and
          operational IT skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
        {projectLinks.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            icon={project.icon}
            link={project.link}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>

      <div className="pt-gutter-md flex flex-col gap-gutter-lg">
        <div className="flex flex-col gap-gutter-xs">
          <span className="font-label text-label-md text-light-primary">WORK HISTORY</span>
          <h2 className="font-headline text-headline-md text-light-on-surface">
            Internships
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
          {internshipDetails.map((internship, index) => (
            <InternshipCard
              key={index}
              title={internship.title}
              position={internship.position}
              duration={internship.duration}
              responsibilities={internship.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
